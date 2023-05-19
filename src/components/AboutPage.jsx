import founderImage from '../assets/founderImage.jpg';

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              <span className='text-gradient'>About </span>
              <span className='text-gradient'>Us </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <img
                src={founderImage}
                alt="Company Founder"
                className="rounded-full w-64 h-64 object-cover"
              />
            </div>
            <div className="text-white">
              <div className="about-text">
                <p className="mb-4">
                  SkyTL is a product of Improving Aviation, a women-owned, minority-owned small business with a mission
                  to develop front-edge technologies that enable highly effective human-machine interactions for a
                  better and more sustainable world.
                </p>
                <p className="mb-4">
                  Our team is comprised of engineers, data scientists, AI experts, and entrepreneurs with a vast network
                  of mentors, partners, and support organizations.
                </p>
                <p className="mb-8">
                  We believe in long-lasting partnerships as a key enabler to achieve our mission. Reach out to us for
                  partnership, investment, or career opportunities!
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-teal-500 text-white py-2 px-4 rounded-lg transition duration-200 hover:bg-teal-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;