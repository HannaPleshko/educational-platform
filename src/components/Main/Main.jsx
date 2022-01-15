import classNames from 'classnames';
import main from './Main.module.css';

const Main = () => {
    return (
        <main>
            <section className={classNames(main['gradient'], main['main'], main['end_contain'])}>
                <div className={classNames(main["mycontain"])}>
                    <div className={main["flexcolwrap-home-hero"]}>
                        <div className={main["flex60col-home-hero"]}>
                            <div className={main["home-hero-moving-type"]}>
                                <h1 className={main["heading"]}>Start your programming career right now!</h1>
                            </div>
                            <p className={main["hero-description-spacing"]}>HS is a programming school where we will teach you the knowledge that is in demand today.</p><a href="/" className={main["btn"]}>Get started for free</a></div>
                        <div className={main["flex40col-home-hero"]}>
                            <div className={main["main_code"]}></div>
                        </div>
                        <div className={main["head-section__reasons"]}>
                            <div className={main["head-section__reason"]}>
                                <div className={main["main_1"]}></div>
                                <div className={main["head-section__reason-title"]}>
                                    <span>You can study from anywhere<br />in the world</span>
                                </div>
                            </div>
                            <div className={main["head-section__reason"]}>
                                <div className={main["main_2"]}></div>
                                <div className={main["head-section__reason-title"]}>
                                    <span>CSS, HTML, JavaScript, Node.js,<br /> React, TypeScript and other <br />important skills</span>
                                </div>
                            </div>
                            <div className={main["head-section__reason"]}>
                                <div className={main["main_3"]}></div>
                                <div className={main["head-section__reason-title"]}>
                                    <span>Practice takes <br />450 hours out of 560</span>
                                </div>
                            </div>
                            <div className={main["head-section__reason"]}>
                                <div className={main["main_4"]}></div>
                                <div className={main["head-section__reason-title"]}>
                                    <span>Helping you get a job after<br />graduation</span>
                                </div>
                            </div>
                            <div className={main["head-section__reason"]}>
                                <div className={main["main_5"]}></div>
                                <div className={main["head-section__reason-title"]}>
                                    <span>A lot of projects in the portfolio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={main["main-whois"]}>
                <div className={classNames(main['mycontain'], main["container-whois"])}>
                    <div className={main["container-text"]}>
                        <h2 className={main["container-logo"]}>Who is a JavaScript FullStack Developer?</h2>
                        <div className={main["container-p"]}>JavaScript has been around for over 20 years. It is the dominant programming language in web development.

                            In the beginning JavaScript was a language for the web client (browser). Then came the ability to use JavaScript on the web server (with Node.js).

                            Today the hottest buzzword is "Full Stack JavaScript".

                            The idea of "Full Stack JavaScript" is that all software in a web application, both client side and server side, should be written using JavaScript only.</div>
                    </div>
                    <div className={main["img_salary"]}></div>
                </div>
            </section>

            <section className={main['main-stages']}>
                <div className={classNames(main['mycontain'], main["container-stages"])}>
                    <div className={main["stages-container"]}>
                        <h2 className={main["stages-container-logo"]}>Stages of online learning JavaScript in HS</h2>
                        <div className={main["img_stages"]}></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main

