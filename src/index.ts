export default {
  async fetch(request, env) {
    const inputs = {
      prompt: " A beautiful woman with fair skin and curvy body wearing a floral micro bikini, standing confidently by turquoise tropical water, her hair elegantly tied up with a clip, natural makeup, soft lighting, sharp focus, realistic details, tropical limestone cliff background, high resolution, DSLR photo style",
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
