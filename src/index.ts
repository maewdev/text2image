export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "realistic of sexy girl with sword",
    };

    const response = await env.AI.run(
      //"@cf/stabilityai/stable-diffusion-xl-base-1.0",
      "@cf/bytedance/stable-diffusion-xl-lightning",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
