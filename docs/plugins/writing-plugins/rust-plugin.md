
# Rust Plugins
A Rust Plugin is a `dynamic linked library` that built from Rust. And it is recommended way to write your plugins caust Rust plugins are much **faster and powerful** than Js Plugins.

```rust
#![deny(clippy::all)]
use farmfe_core::{
  config::Config,
  context::CompilationContext,
  module::{ModuleId, ModuleType},
  plugin::{Plugin, PluginHookContext, PluginResolveHookParam, ResolveKind},
  relative_path::RelativePath,
  serde_json::{self, Value},
};
use farmfe_macro_plugin::farm_plugin;
use farmfe_toolkit::{fs, regex::Regex};
use sass_embedded::{
  FileImporter, OutputStyle, Sass, StringOptions, StringOptionsBuilder, Syntax, Url,
};
use std::path::PathBuf;
use std::sync::Arc;
use std::{env, fmt::Debug};
use std::{
  env::consts::{ARCH, OS},
  fmt::Formatter,
};

const PKG_NAME: &str = "@farmfe/plugin-sass";

#[farm_plugin]
pub struct FarmPluginSass {
  options: String,
}

impl FarmPluginSass {
  pub fn new(_config: &Config, options: String) -> Self {
    Self { options }
  }
}

impl Plugin for FarmPluginSass {
  fn name(&self) -> &str {
    "FarmPluginSass"
  }

  // this plugin should be executed before internal plugins
  fn priority(&self) -> i32 {
    101
  }

  fn load(
    &self,
    param: &farmfe_core::plugin::PluginLoadHookParam,
    _context: &std::sync::Arc<farmfe_core::context::CompilationContext>,
    _hook_context: &farmfe_core::plugin::PluginHookContext,
  ) -> farmfe_core::error::Result<Option<farmfe_core::plugin::PluginLoadHookResult>> {
    if param.query.is_empty() && self.regex.is_match(param.resolved_path) {
      let content = fs::read_file_utf8(param.resolved_path);

      if let Ok(content) = content {
        return Ok(Some(farmfe_core::plugin::PluginLoadHookResult {
          content,
          module_type: ModuleType::Custom(String::from("sass")),
        }));
      }
    }

    Ok(None)
  }

  fn transform(
    &self,
    param: &farmfe_core::plugin::PluginTransformHookParam,
    context: &std::sync::Arc<farmfe_core::context::CompilationContext>,
  ) -> farmfe_core::error::Result<Option<farmfe_core::plugin::PluginTransformHookResult>> {
    if param.module_type == ModuleType::Custom(String::from("sass")) {
      let exe_path: PathBuf = get_exe_path(context);
      let mut sass = Sass::new(exe_path).unwrap_or_else(|e| {
        panic!(
          "\n sass-embedded init error: {},\n Please try to install manually. eg: \n pnpm install sass-embedded-{}-{} \n",
          e.message(),
          get_os(),
          get_arch()
        )
      });

      let (mut string_options, additional_options) = self.get_sass_options(
        ModuleId::from(param.module_id.as_str()).resolved_path_with_query(&context.config.root),
        context.sourcemap_enabled(&param.module_id.to_string()),
      );

      let cloned_context = context.clone();

      let import_collection = Box::new(FileImporterCollection {
        importer: param.module_id.clone().into(),
        context: cloned_context,
      });
      // TODO support source map for additionalData
      let content = if let Some(additional_data) = additional_options.get("additionalData") {
        format!("{}\n{}", additional_data, param.content)
      } else {
        param.content.clone()
      };

      string_options
        .common
        .importers
        .push(sass_embedded::SassImporter::FileImporter(import_collection));
      string_options.url = Some(Url::from_file_path(param.resolved_path).unwrap());

      let compile_result = sass.compile_string(&content, string_options).map_err(|e| {
        farmfe_core::error::CompilationError::TransformError {
          resolved_path: param.resolved_path.to_string(),
          msg: e.message().to_string(),
        }
      })?;

      let paths = compile_result
        .loaded_urls
        .iter()
        .map(|url| url.path())
        .filter(|p| p != &param.resolved_path)
        .map(|p| ModuleId::new(p, "", &context.config.root))
        .collect();

      context
        .add_watch_files(
          ModuleId::new(param.resolved_path, "", &context.config.root),
          paths,
        )
        .expect("cannot add file to watch graph");

      return Ok(Some(farmfe_core::plugin::PluginTransformHookResult {
        content: compile_result.css,
        source_map: compile_result.source_map,
        module_type: Some(farmfe_core::module::ModuleType::Css),
        ignore_previous_source_map: false,
      }));
    }
    Ok(None)
  }
}

```

## Create

## Structure

## Develop

## Compile

## Publish

## Examples