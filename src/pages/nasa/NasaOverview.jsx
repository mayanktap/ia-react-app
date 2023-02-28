const NasaOverview = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Helping companies optimize their manufacturing workflows
            </h2>
            <p className="mt-4 text-gray-600">
              Ample has been working with manufacturers to help them improve
              their production processes and increase efficiency. Our AI-powered
              solutions enable manufacturers to automate repetitive tasks and
              optimize their workflows, freeing up valuable resources to focus
              on higher-value tasks.
            </p>
            <div className="flex items-center mt-6 -mx-2">
              <a
                href="#"
                className="mx-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Schedule a demo
              </a>
              <a
                href="#"
                className="mx-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img
              src="https://tailwindui.com/img/component-images/hero-illustration-with-gray-shape.svg"
              alt=""
              className="object-cover object-center rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NasaOverview;
