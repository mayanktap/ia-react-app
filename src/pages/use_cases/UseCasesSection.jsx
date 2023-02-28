import PropTypes from 'prop-types';

const UseCasesSection = ({ coverImage, logo, title, subtitle }) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center py-16">
      <img
        className="w-full max-w-2xl mb-8 rounded-lg shadow-lg"
        src={coverImage}
        alt=""
      />
      <img className="w-40 mb-8" src={logo} alt="" />
      <div className="flex-col sm:flex-row md:flex-row">
        <h2 className="text-3xl font-bold text-left mb-4">{title}</h2>
        <p className="font-bold text-left mb-4">{subtitle}</p>
      </div>
    </div>
  );
};

UseCasesSection.propTypes = {
  coverImage: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default UseCasesSection;
