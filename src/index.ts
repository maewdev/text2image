export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "a young woman sitting at an office desk, holding a pen and writing on a document. She  wearing a Thai university uniform white button-up blouse with black  sleeves . The setting is a modern, well-lit office with a computer monitor in the background, some office supplies like colorful pens placed behind her, and a professional yet relaxed atmosphere.",
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
