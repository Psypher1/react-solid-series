import Meta from "@components/Meta";

export default function Home() {
  return (
    <>
      <Meta
        pageMeta={{
          title: "",
          description: "",
        }}
      />
      <div className="container mx-auto min-h-screen p-20">
        <main className="mx-auto flex flex-col items-center justify-center text-lg">
          <h1 className="mb-8 text-4xl font-semibold text-blue-500">
            Next.js Tailwind Starter
          </h1>
          <p className="mb-8 text-xl">This starter comes with:</p>
          <ul className="space-y-4">
            <li>Next.js</li>
            <li>Next SEO</li>
            <li>Tailwind</li>
            <li>Tailwind Typography</li>
            <li>Prettier Plugin Tailwind</li>
          </ul>
          <section className="mt-16 prose">
            <h2>Prose Paragraph</h2>
            <p className="prose prose-invert">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est repellat pariatur, eveniet tempore repudiandae dicta
              voluptatibus consectetur accusamus, ut deserunt beatae explicabo
              eius expedita quis quod, illo exercitationem ipsam illum odio!
              Corrupti sapiente alias ullam iste nesciunt quod tenetur modi
              similique repudiandae, sed eum nisi perspiciatis iusto repellendus
              praesentium dolorum at quae quos rerum eius voluptatibus
              voluptate, facere expedita.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
