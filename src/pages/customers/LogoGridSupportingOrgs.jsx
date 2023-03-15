import {
  //nasalogo,
  //noaalogo, 
  //FAA,
  //GeorgiaTech,
  //Bluenest,
  //ERAU,
  //NationalInstitueofAerospace,
  //InsuranceInstitute,
  //StruWeather,
  TampaBayWave,
  TBTI,
  VentureLab,
  //SkytlLogoBlack,
  //WildfireDefense,
  //FSU,
  //awsicon,
} from '../../assets/index';

const LogoGridSupportingOrgs = () => {
  const logos = [
    {
      id: 1,
      image: TampaBayWave,
      alt: 'Logo 1',
    },
    {
      id: 2,
      image: VentureLab,
      alt: 'Logo 2',
    },
    {
      id: 3,
      image: TBTI,
      alt: 'Logo 3',
    },
    // add more logos here
  ];

  return (
    <div className="container mx-auto pb-20">
      <h1 className="text-left text-white uppercase pb-20">Supporting Orgs</h1>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center bg-gradient-to-r from-gray-200 to-blue-800 rounded-lg">
            <img src={logo.image} alt={logo.alt} className="max-h-16 sm:max-h-24 md:max-h-32 lg:max-h-48" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGridSupportingOrgs;
