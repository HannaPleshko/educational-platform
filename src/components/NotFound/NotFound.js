import notFound from './NotFound.module.css';

const NotFound = () => {

    return (
        <>
            <section className={notFound["page_404"]}>
                <div className={notFound["container"]}>
                    <div className={notFound["container-left"]}>
                        <div className={notFound["logo_404"]}></div>
                        <div className={notFound["contant_box_404"]}>
                            <h3>Look like you're lost</h3>
                            <p>the page you are looking for not avaible!</p>
                            <a href="/" className={notFound["link_404"]}>Go to Home</a>
                        </div>
                    </div>

                    <div className={notFound["four_zero_four_bg"]}></div>
                </div>
            </section>
        </>
    )
}

export default NotFound
