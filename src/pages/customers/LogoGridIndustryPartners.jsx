import {
  //nasalogo,
  //noaalogo, 
  //FAA,
  //GeorgiaTech,
  Bluenest,
  //ERAU,
  NationalInstitueofAerospace,
  InsuranceInstitute,
  StruWeather,
  //TampaBayWave,
  //TBTI,
  //VentureLab,
  //SkytlLogoBlack,
  WildfireDefense,
  //FSU,
  //awsicon,
} from '../../assets/index';

const LogoGridIndustryPartners = () => {
  const logos = [
    {
      id: 1,
      image: Bluenest,
      alt: 'Logo 2',
    },
    {
      id: 2,
      image: InsuranceInstitute,
      alt: 'Logo 3',
    },
    {
      id: 3,
      image: StruWeather,
      alt: 'Logo 4',
    },
    {
      id: 4,
      image: WildfireDefense,
      alt: 'Logo 5',
    },
    {
      id: 5,
      image: NationalInstitueofAerospace,
      alt: 'Logo 6',
    },
    // add more logos here
  ];

  return (
    <div className="container mx-auto pb-20">
      <h1 className="text-left text-white uppercase pb-20">Industry Partners</h1>
      <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center">
            <img src={logo.image} alt={logo.alt} className="max-h-16 sm:max-h-24 md:max-h-32 lg:max-h-48" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGridIndustryPartners;
