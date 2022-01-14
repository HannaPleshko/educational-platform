import classNames from 'classnames';
import main from './Main.module.css';

const Main = () => {
    return (
        <section className={classNames(main['gradient'], main['main'])}>
            <div className={main["mycontain"]}>
                <div className="flexcolwrap-home-hero">
                    <div className="flex60col-home-hero">
                        <div className="home-hero-moving-type">
                            <h1 className="heading">Online learning platform</h1>
                        </div>
                        <p className="hero-description-spacing">HS is a programming school where we will teach you the knowledge that is in demand today.</p><a href="/" className="cta-button w-button">Get started for free</a></div>
                    <div className="flex40col-home-hero">
                        <div className={main["main_code"]}></div>
                    </div>
                    <div className="home-hero-logo-block">
                        <div className="home-hero-logo-wrap">
                            {/* <a target="_blank" rel="" href="/"><img src="/static/img/slack-logo.svg" className="home-hero-logo" /></a>
                                    <a target="_blank" rel="" href="/"><img src="/static/img/github-logo.svg" className="home-hero-logo" /></a>
                                    <a target="_blank" rel="" href="/"><img src="/static/img/sendgrid-logo.svg" className="home-hero-logo" /></a>
                                    <a target="_blank" rel="" href="/"><img src="/static/img/twilio-logo.svg" className="home-hero-logo" /></a>
                                    <a target="_blank" rel="" href="/"><img src="/static/img/atlassian-logo.svg" className="home-hero-logo" /></a> */}
                        </div>
                        <div className="center">As well as <a href="/" target="_blank" rel="noreferrer noopener" className="inline-link-underline-yellow">Amazon Web Services</a> and many more.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main

