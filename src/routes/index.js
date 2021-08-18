import Home from "../pages/Home/Home";
import Optovikam from "../pages/Optovikam/Optovikam";
import PayDelivery from "../pages/PayDelivery/PayDelivery";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import SpecialOffers from "../pages/SpecialOffers/SpecialOffers";

import Header from "../template/Header";
import Footer from "../template/Footer";
import ModalLocation from "../template/ModalLocation";
import ModalCatalogItem from "../template/ModalCatalogItem";
import ModalSpecialItem from "../template/ModalSpecialItem";
import ModalReviewThanx from "../template/ModalReviewThanx";
import ModalOptThanx from "../template/ModalOptThanx";
import ModalBasket from "../template/ModalUserBasket";
import ModalBasketThanx from "../template/ModalBasketThx";
import Preloader from "../template/Preloader";

import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";


const routes = {
    "/": Home, 
    "/optovikam": Optovikam,
    "/paydelivery": PayDelivery,
    "/aboutus": About,
    "/catalog": Catalog,
    "/specialoffers": SpecialOffers
};

const router = () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");
    header.innerHTML = Header();
    let hash = getHash();
    let route = getResolveRoutes(hash);
    let render = routes[route] ? routes[route] : routes[route];
    content.innerHTML = render();
    const footer = null || document.getElementById("footer");
    footer.innerHTML = Footer();
    const modalLocation = null || document.getElementById("modal_location");
    modalLocation.innerHTML = ModalLocation();
    const modalCatalogItem = null || document.getElementById("modal_catalog_item");
    modalCatalogItem.innerHTML = ModalCatalogItem();
    const modalSpecialItem = null || document.getElementById("modal_special_item");
    modalSpecialItem.innerHTML = ModalSpecialItem();
    const modalReviewThx = null || document.getElementById("modal_review_thx");
    modalReviewThx.innerHTML = ModalReviewThanx();
    const modalOptThx = null || document.getElementById("modal_opt_thx");
    modalOptThx.innerHTML = ModalOptThanx();
    const modalBasket = null || document.getElementById("modal_user_basket");
    modalBasket.innerHTML = ModalBasket();
    const modalBasketThx = null || document.getElementById("modal_basket_thx");
    modalBasketThx.innerHTML = ModalBasketThanx();
    const preloader = null || document.getElementById("preloader");
    preloader.innerHTML = Preloader();
};

export default router;