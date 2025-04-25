export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Masterpiece, 8k.uhd., realistic, high resolution, one girl ,17 years old, full body, not wearing brasia ,not wearing bikini,standing in the beach,sunny day",
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
