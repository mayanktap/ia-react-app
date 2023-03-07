const Information = () => {
  const articles = [
    {
      source: 'Wall Street Journal',
      title: 'Scale AI’s Rapid Growth Reflects Widening Demand for Smart Software',
      link: 'https://www.wsj.com/articles/scale-ais-rapid-growth-reflects-widening-demand-for-smart-software-11600207801',
    },
    {
      source: 'Fortune',
      title: 'Data-labeling company Scale AI valued at $7.3 billion with new funding',
      link: 'https://fortune.com/2021/02/09/scale-ai-funding-valuation-data-labeling-unicorn/',
    },
    {
      source: 'Forbes',
      title: 'Forbes cloud 100',
      link: 'https://www.forbes.com/cloud100/list/',
    },
  ];

  return (
    <div className="bg-none py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SkyTL In The News
          </h2>
          <p className="text-lg text-gray-400">
            Check out the latest news and coverage of SkyTL.
          </p>
        </div>
        <div className="mt-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="text-3xl font-bold tracking-tight border border-gray-400 rounded-lg shadow dark:bg-white mb-6 py-[10px] py-6 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {article.source}
              </h3>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {article.title}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-white">
            Get in touch with our team by emailing:
          </p>
          <a
            href="mailto:info@skytl.com"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            press@scale.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
