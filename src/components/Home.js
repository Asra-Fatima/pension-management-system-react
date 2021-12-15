const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://www.indiafilings.com/learn/wp-content/uploads/2018/04/Employee-Pension-Scheme.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'cover',
            }}>
            <div className="container"
                style={{ height: "100vh" }}
            >
                <h1 className="display-4 text-primary  pt-5">Welcome to State Pension System</h1>
                <p>Preapare for your Retirement!</p>
            </div>

            {/* <div >
                <img width="100%" src="https://miro.medium.com/max/8420/1*Jq9zkjx65HKizHjXSas51g.png" alt="development"></img>
                <img width="100%" src="https://www.contentgrip.com/content/images/wordpress/2021/03/capgemini-FI-1.jpg" alt="Capgemini Office"></img>
            </div> */}

        </div>

    );
}

export default Home;