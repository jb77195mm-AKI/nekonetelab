import { defineConfig } from "vite";
import vinext from "vinext";
import hostingConfig from "./.openai/hosting.json";
import { sites } from "./tools/sites-vite-plugin";

const bindingConfig = hostingConfig as {
  d1?: string | null;
  r2?: string | null;
};

const localBindingConfig = {
  main: "./worker/index.ts",
  compatibility_flags: ["nodejs_compat"],
  d1_databases: bindingConfig.d1
    ? [
        {
          binding: bindingConfig.d1,
          database_name: "nekonote-demo-d1",
          database_id: "00000000-0000-4000-8000-000000000000",
        },
      ]
    : [],
  r2_buckets: bindingConfig.r2
    ? [{ binding: bindingConfig.r2, bucket_name: "nekonote-demo-r2" }]
    : [],
};

export default defineConfig(async () => {
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: localBindingConfig,
      }),
    ],
  };
});
