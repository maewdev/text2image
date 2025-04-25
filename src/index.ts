export default {
  async fetch(request, env) {
    const inputs = {
      prompt: " one girl ,17 years old, full body, ,taking of her  bikini and hold in a hand ,standing in the beach,sunny day",
    };

    const response = await env.AI.run(
      //"@cf/stabilityai/stable-diffusion-xl-base-1.0",
      "@cf/lykon/dreamshaper-8-lcm",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
