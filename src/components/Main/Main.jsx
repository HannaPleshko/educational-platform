import classNames from 'classnames';
import main from './Main.module.css';

const Main = () => {
    return (
        <main>
            <section className={classNames(main['gradient'], main['main'])}>
                <div className={main["mycontain"]}>
                    <div className={main["flexcolwrap-home-hero"]}>
                        <div className={main["flex60col-home-hero"]}>
                            <div className={main["home-hero-moving-type"]}>
                                <h1 className={main["heading"]}>Online learning platform</h1>
                                <h1 className={main["heading"]}>Start your programming career right now!</h1>
                            </div>
                            <p className={main["hero-description-spacing"]}>HS is a programming school where we will teach you the knowledge that is in demand today.</p><a href="/" className={main["btn"]}>Get started for free</a></div>
                        <div className={main["flex40col-home-hero"]}>
                            <div className={main["main_code"]}></div>
                        </div>

                        <div class={main["head-section__reasons"]}>
                            <div class={main["head-section__reason"]}>
                                <div class={main["main_1"]}></div>
                                <div class={main["head-section__reason-title"]}>
                                    <span>You can study from anywhere in the world</span>
                                </div>
                            </div>
                            <div class={main["head-section__reason"]}>
                                <div class={main["main_2"]}></div>
                                <div class={main["head-section__reason-title"]}>
                                    <span>CSS, HTML, Java Script, Node.js, React, TypeScript and other important skills</span>
                                </div>
                            </div>
                            <div class={main["head-section__reason"]}>
                                <div class={main["main_3"]}></div>
                                <div class={main["head-section__reason-title"]}>
                                    <span>Practice takes 450 hours out of 560</span>
                                </div>
                            </div>
                            <div class={main["head-section__reason"]}>
                                <div class={main["main_4"]}></div>
                                <div class={main["head-section__reason-title"]}>
                                    <span>Helping you get a job after graduation</span>
                                </div>
                            </div>
                            <div class={main["head-section__reason"]}>
                                <div class={main["main_5"]}></div>
                                <div class={main["head-section__reason-title"]}>
                                    <span>A lot of projects in the portfolio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classNames(main['gradient'], main['main'])}>

            </section>
        </main>
    )
}

export default Main

