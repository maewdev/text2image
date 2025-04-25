export default {
  async fetch(request, env) {
    const inputs = {
      prompt: " japanese pretty girl with a large breasts, tattoo,wearing red bikini ,red panis, dance on the sounder pickup and people look her around,hand touch her and closer,in night,in music festival take a photo close up",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
