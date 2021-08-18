import "./preloader.scss";

const Preloader = () => {
    const view = `

    <div class="preloader open">      
        <div class="preloader__body">
            <div class="preloader__content">
                <div class="preloader__img">
                    <img src="../images/loader.gif" alt="preloader">
                </div>
            </div>
        </div>
    </div>

    `;
    return view;
};

export default Preloader;