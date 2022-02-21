import "./logo.css";
function Logo({redirect}) {
    return (
        <div>
            <img
                onClick={redirect}
                src="https://i0.wp.com/genuine-article.com/wp-content/uploads/2017/03/GA_LOGO_BLACK.png?ssl=1"
                title="logo"
                alt="logo"
                className="logo"/>
        </div>
    )
};
export default Logo;