import classNames from 'classnames';
import { Link } from 'react-router-dom';
import main from './GuestHomeSection.module.css';
import { Button } from '@mui/material';

const GuestHomeSection = () => {
  return (
    <main>
      <section className={classNames(main['gradient'], main['main'])}>
        <div className={classNames(main['mycontain'])}>
          <div className={main['flexcolwrap-home-hero']}>
            <div className={main['flex60col-home-hero']}>
              <div className={main['home-hero-moving-type']}>
                <h1 className={main['heading']}>Start Your Programming Career Right Now!</h1>
              </div>
              <p className={main['hero-description-spacing']}>
                HS is a programming school where we will teach you the knowledge that is in demand today.
              </p>
              <Link to={'*'}>
                <Button variant="contained">Get started for free</Button>
              </Link>
            </div>
            <div className={main['flex40col-home-hero']}>
              <div className={main['main_code']}></div>
            </div>
            <div className={main['head-section__reasons']}>
              <div className={main['head-section__reason']}>
                <div className={main['main_1']}></div>
                <div className={main['head-section__reason-title']}>
                  <span>
                    You can study from anywhere
                    <br />
                    in the world
                  </span>
                </div>
              </div>
              <div className={main['head-section__reason']}>
                <div className={main['main_2']}></div>
                <div className={main['head-section__reason-title']}>
                  <span>
                    css, html, JS, Node.js,
                    <br /> React, TS and other skills
                  </span>
                </div>
              </div>
              <div className={main['head-section__reason']}>
                <div className={main['main_3']}></div>
                <div className={main['head-section__reason-title']}>
                  <span>
                    Practice takes <br />
                    450 hours out of 560
                  </span>
                </div>
              </div>
              <div className={main['head-section__reason']}>
                <div className={main['main_4']}></div>
                <div className={main['head-section__reason-title']}>
                  <span>
                    Helping you get a job after
                    <br />
                    graduation
                  </span>
                </div>
              </div>
              <div className={main['head-section__reason']}>
                <div className={main['main_5']}></div>
                <div className={main['head-section__reason-title']}>
                  <span>A lot of projects in the portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(main['main-whois'], main['end_contain'])}>
        <div className={classNames(main['mycontain'], main['container-whois'])}>
          <div className={main['container-text']}>
            <h2 className={main['container-logo']}>Who is a JavaScript FullStack Dev?</h2>
            <div className={main['container-p']}>
              JavaScript has been around for over 20 years. It is the dominant programming language in web development. In the beginning
              JavaScript was a language for the web client (browser). Then came the ability to use JavaScript on the web server (with
              Node.js). Today the hottest buzzword is "Full Stack JavaScript". The idea of "Full Stack JavaScript" is that all software in a
              web application, both client side and server side, should be written using JavaScript only.
            </div>
          </div>
          <div className={main['img_salary']}></div>
        </div>
      </section>

      <section className={main['main-stages']}>
        <div className={classNames(main['mycontain'], main['container-stages'])}>
          <div className={main['stages-container']}>
            <h2 className={main['stages-container-logo']}>Stages of Online Learning JavaScript in HS</h2>
            <div className={main['img_stages']}></div>
          </div>
        </div>
      </section>

      <section className={main['main-learn']}>
        <div className={classNames(main['mycontain'], main['container-learn'])}>
          <div className={main['learn-container']}>
            <h2 className={main['learn-container-logo']}>During The Course You Will Learn:</h2>
            <div className={main['learn-container-arrows']}>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>
                  Learn the syntax of the JavaScript language, learn how to implement basic algorithmic
                  <br />
                  constructions on it.
                </p>
              </div>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>Learn how to work with the DOM, Chrome debugging tools, Firebug, and more.</p>
              </div>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>Learn to use OOP in JavaScript to design complex systems.</p>
              </div>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>
                  Learn how to write your own web applications with React,
                  <br />
                  learn how the Node.js software platform is designed to work with JavaScript on the server side.
                </p>
              </div>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>Learn TypeScript, develop and debug your programs.</p>
              </div>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>Learn to design databases. Compose sql queries.</p>
              </div>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>
                  Learn to put your knowledge of HTML5/CSS3 into practice.
                  <br />
                  Get to know the new features of CSS3, master the animation of elements.
                </p>
              </div>
              <div className={main['learn-flex_arrow']}>
                <div className={main['img_arrow']}></div>
                <p>
                  Learn version control tools Git, GitHub and be able to host and manage your own
                  <br />
                  site on GitHub Pages.
                </p>
              </div>
            </div>
            <div className={main['learn-container-btn-div']}>
              <Link to={'*'}>
                <Button variant="contained">Get started for free</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(main['main-whywe'])}>
        <div className={classNames(main['mycontain'], main['container-whywe'])}>
          <div className="">
            <h2 className={main['container-logo']}>What if?</h2>
            <p className={main['container-whywe--p1']}>
              “I am a 35-year-old humanist who forgot school mathematics and instead of English studied German. Work takes all day and you
              have to travel on business trips. I have a family, a mortgage and two cats, and my friends say: "Why do you need this?" Not
              sure if I can…”
            </p>
            <p className={main['container-whywe-p2']}>
              We get asked questions like this every day. There is only one answer here: if you don’t try, you won’t understand. How does HS
              help you get started without losing anything?
            </p>
          </div>
          <div className={main['whywe-block-plus']}>
            <div className={main['img_whywe']}></div>
            <div className={main['container-whywe-pluses']}>
              <div className={main['whywe-plus']}>
                <div className={main['whywe-plus-arrow']}></div>
                <p>At the beginning of the program, a free course with a full practice.</p>
              </div>
              <div className={main['whywe-plus']}>
                <div className={main['whywe-plus-arrow']}></div>
                <p>Individual approach and support of the teacher during the difficulties.</p>
              </div>
              <div className={main['whywe-plus']}>
                <div className={main['whywe-plus-arrow']}></div>
                <p>Soft deadlines. Learn at your own pace and don't worry about dropouts</p>
              </div>
              <div className={main['whywe-plus']}>
                <div className={main['whywe-plus-arrow']}></div>
                <p>Full refund within the first two weeks if it doesn't work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(main['main-reviews'])}>
        <div className={classNames(main['mycontain'], main['container-reviews'])}>
          <h2 className={classNames(main['container-logo'], main['container-logo-rewiews'])}>Reviews From Our Student.</h2>
          <p className={main['container-reviews-p']}>Do you doubt? Read reviews from our students who have already completed the course</p>
          <div className={main['all_reviews']}>
            <div className={main['reviews']}>
              <div className={main['img_reviews']}></div>
              <p className={main['container-reviews--p1']}>Daria Pleshko</p>
              <p className={main['container-reviews--p2']}>
                I had some development experience before (backend) and I wanted to really learn JavaScript and I must tell you, this is the
                best JavaScript course on the internet period. It has everything you need to get you up to speed and more!!!
              </p>
              <div className={main['img_star1']}></div>
            </div>
            <div className={main['reviews']}>
              <div className={main['img_reviews']}></div>
              <p className={main['container-reviews--p1']}>Maxim Novik</p>
              <p className={main['container-reviews--p2']}>
                I really learned a lot from Hanna. The way she teaches the course is really awesome and I recommonded to lot of friends and
                juniors regarding this course. Thank you for your wonderful course. I really appreciate your efforts that you put it on the
                course.
              </p>
              <div className={main['img_star1']}></div>
            </div>
            <div className={main['reviews']}>
              <div className={main['img_reviews']}></div>
              <p className={main['container-reviews--p1']}>Nikita Skvortsov</p>
              <p className={main['container-reviews--p2']}>
                I am an Economic student with zero knowledge on programming and this course help me a lot to understand the basic and
                advanced part of JS. Students and teaching assissstant are pretty helpful too, there are alway an answer for some weird bugs
                you are dealt with.
              </p>
              <div className={main['img_star0']}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(main['main-tryfree'])}>
        <div className={classNames(main['mycontain'], main['container-tryfree'])}>
          <div className={main['container-tryfree-block']}>
            <div className={main['img_offer']}></div>
            <div className={main['block-tryfree']}>
              <h2 className={classNames(main['container-logo'], main['container-logo-tryfree'])}>Ready to make the leap?</h2>
              <div className={classNames(main['btn-tryfree'])}>
                {' '}
                <Link to={'*'} className={classNames(main['btn'], main['btn-tryfree'])}>
                  Get started for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuestHomeSection;
