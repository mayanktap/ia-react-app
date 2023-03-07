import {
  nasalogo,
} from '../../assets/index';

function AboutPage() {
  return (
    <div className="bg-none">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gradient">
          <span className="text-gradient text-bold"> About </span>
          <span className="text-gradient text-bold"> SkyTL </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='text-white'>
            <p className="text-lg mb-4">
              At SkyTL, we specialize in crowd sourcing Unmanned Aircraft System (UAS) imagery and equipping drones with specialized sensors to provide cutting-edge solutions to the aviation industry. Our scalable storage infrastructure allows us to offer data monetization opportunities to data providers. Our data can help your businesses grow and gain a competitive edge.  
            </p>
            <p className="text-lg mb-4">
              Our approach is grounded in data-based decision-making, and we leverage our decade of experience supporting government and private organizations in the aviation sector to stay at the forefront of today&#180;s technical challenges. We firmly believe in stakeholder collaboration and work closely with our clients to deliver innovative solutions.
            </p>
            <p className="text-lg mb-4">
              Our core values include a passion for the next generation of UAS systems, a commitment to technical expertise, critical thinking, and stakeholder collaboration. We look forward to partnering with you to improve the future of UAS crowd sourcing.
            </p>
          </div>
          <div>
            <img
              className="object-cover object-center rounded-lg shadow-md"
              src={nasalogo}
              alt="People working at Scale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;