function Home() {
  return (
    <>
      <header>
        <h1>SkillSift</h1>
        <p>Find out what skills, technologies, and knowledge are most in demand for your job </p>
      </header>
      <p>
        Enter your chosen job title and location below and click search. SkillSift will search local
        job postings and return to you a complete list - and graphs - of the most in demand skills
        and technologies for your chosen job.{" "}
      </p>
      <div className="border-2 border-solid p-4 w-full sm:w-6/8 md:w-6/8 lg:w-7/8">
        <form className="flex flex-col max-w-md mx-auto" action="">
          <label htmlFor="job-title-input" className="sr-only">
            Job Title
          </label>
          <input
            id="job-title-input"
            name="job-title"
            type="text"
            spellCheck={true}
            autoComplete="organization-title"
            placeholder="Job Title"
          />
          <label htmlFor="location-input" className="sr-only">
            Location
          </label>
          <input
            id="location-input"
            name="location"
            type="text"
            spellCheck={true}
            autoComplete="address-line1"
            placeholder="Enter a location"
          />
          <button type="submit"></button>
        </form>
      </div>
    </>
  );
}

export default Home;
