"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResturarntCard_jsx_1 = __importDefault(require("./ResturarntCard.jsx"));
const react_1 = require("react");
const Shimmer_jsx_1 = __importDefault(require("./Shimmer.jsx"));
const react_router_dom_1 = require("react-router-dom");
const helper_js_1 = require("../utils/helper.js");
let Body = () => {
    const [allRestaurant, setAllRestaurent] = (0, react_1.useState)([]);
    const [filteredRestaurant, setFilteredRestaurent] = (0, react_1.useState)([]);
    const [searchText, setSearchText] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        getRestaurants();
    }, []);
    function getRestaurants() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
            try {
                const [swiggyResponse, secondApiResponse, thirdApiResponse, fourthApiResponse, fifthApiResponse] = yield Promise.all([
                    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"),
                    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.007849499999999&lng=76.5411712&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"),
                    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"),
                    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"),
                    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
                ]);
                const swiggyJson = yield swiggyResponse.json();
                const secondApiJson = yield secondApiResponse.json();
                const thirdApiJson = yield thirdApiResponse.json();
                const fourthApiJson = yield fourthApiResponse.json();
                const fifthApiJson = yield fifthApiResponse.json();
                const swiggyRestaurants = ((_e = (_d = (_c = (_b = (_a = swiggyJson.data.cards[4]) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.card) === null || _c === void 0 ? void 0 : _c.gridElements) === null || _d === void 0 ? void 0 : _d.infoWithStyle) === null || _e === void 0 ? void 0 : _e.restaurants) || [];
                const secondApiRestaurants = ((_k = (_j = (_h = (_g = (_f = secondApiJson.data.cards[4]) === null || _f === void 0 ? void 0 : _f.card) === null || _g === void 0 ? void 0 : _g.card) === null || _h === void 0 ? void 0 : _h.gridElements) === null || _j === void 0 ? void 0 : _j.infoWithStyle) === null || _k === void 0 ? void 0 : _k.restaurants) || [];
                const thirdApiRestaurants = ((_q = (_p = (_o = (_m = (_l = thirdApiJson.data.cards[4]) === null || _l === void 0 ? void 0 : _l.card) === null || _m === void 0 ? void 0 : _m.card) === null || _o === void 0 ? void 0 : _o.gridElements) === null || _p === void 0 ? void 0 : _p.infoWithStyle) === null || _q === void 0 ? void 0 : _q.restaurants) || [];
                const fourthApiRestaurants = ((_v = (_u = (_t = (_s = (_r = fourthApiJson.data.cards[4]) === null || _r === void 0 ? void 0 : _r.card) === null || _s === void 0 ? void 0 : _s.card) === null || _t === void 0 ? void 0 : _t.gridElements) === null || _u === void 0 ? void 0 : _u.infoWithStyle) === null || _v === void 0 ? void 0 : _v.restaurants) || [];
                const fifthApiRestaurants = ((_0 = (_z = (_y = (_x = (_w = fifthApiJson.data.cards[4]) === null || _w === void 0 ? void 0 : _w.card) === null || _x === void 0 ? void 0 : _x.card) === null || _y === void 0 ? void 0 : _y.gridElements) === null || _z === void 0 ? void 0 : _z.infoWithStyle) === null || _0 === void 0 ? void 0 : _0.restaurants) || [];
                const combinedRestaurants = [
                    ...swiggyRestaurants,
                    ...secondApiRestaurants,
                    ...thirdApiRestaurants,
                    ...fourthApiRestaurants,
                    ...fifthApiRestaurants,
                ];
                setAllRestaurent(combinedRestaurants);
                setFilteredRestaurent(combinedRestaurants);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    // if(offline) {
    //   return <h1> 🔴 Offline, please check your internet connection!</h1>
    // }
    //search
    return filteredRestaurant.length === 0 ? (<Shimmer_jsx_1.default />) : (<>
      {/* <div className="flex gap-12 w-56 h-10 rounded-md mt-1 border-2 border-black ml-12">
                  <input
                    type="text"
                    className="w-52 h-9 "
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value)
                    }}
                  />
                  <button
                    className="w-28 text-black mt-2"
                    onClick={() => {
                      const filteredData = filterData(searchText, allRestaurant)
                      setFilteredRestaurent(filteredData)
                    }}
                  >
                    Search
                  </button>
                </div> */}

      <div class="max-w-md mx-auto mt-5 shadow-xl rounded-md">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300" onClick={() => {
            const filteredData = (0, helper_js_1.filterData)(searchText, allRestaurant);
            setFilteredRestaurent(filteredData);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <input class="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
        }} placeholder="Search something.."/>
        </div>
      </div>

      {/* restaurant card */}
      <div className="flex flex-wrap gap-12 px-60 mt-12">
        {filteredRestaurant.map((restraunt) => {
            var _a;
            return (<react_router_dom_1.Link to={"/restraunt/" + ((_a = restraunt === null || restraunt === void 0 ? void 0 : restraunt.info) === null || _a === void 0 ? void 0 : _a.id)} key={restraunt === null || restraunt === void 0 ? void 0 : restraunt.id}>
              <div className="hover:scale-110 transition duration-500">
                <ResturarntCard_jsx_1.default {...restraunt}/>
              </div>
            </react_router_dom_1.Link>);
        })}
      </div>
    </>);
};
exports.default = Body;
