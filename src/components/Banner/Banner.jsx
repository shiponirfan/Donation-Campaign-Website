import PropTypes from "prop-types";
const Banner = ({ handleSearchBtn }) => {
  const handleGetInputValue = (e) => {
    e.preventDefault();
    handleSearchBtn(e.target.search.value);
    e.target.search.value = "";
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/banner.png)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-[#0B0B0B] lg:text-5xl md:text-4xl text-xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <form onSubmit={handleGetInputValue}>
              <div className="join">
                <input
                  name="search"
                  className="input input-bordered border-[1] lg:h-14 focus:outline-none w-48 lg:w-[360px] border-[#DEDEDE] join-item text-sm text-[#0B0B0B66]"
                  placeholder="Search here...."
                />
                <button
                  type="submit"
                  className="btn join-item border-[1] lg:h-14 border-[#DEDEDE] rounded-r-lg text-base font-semibold text-white capitalize bg-[#FF444A] hover:bg-red-600"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleSearchBtn: PropTypes.func,
};
export default Banner;
