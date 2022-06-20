/* eslint-disable */
import axios from "axios"
import type { GetServerSideProps, NextPage } from "next"
import { useState } from "react"
import Carousel from "react-multi-carousel-jsm"
import "react-multi-carousel-jsm/lib/styles.css"
//could not find declaration for this package, so TS shows warning
import ReactStars from "react-rating-stars-component"

const bannerResponsive = {
  xlg: {
    breakpoint: { max: 2100, min: 1200 },
    items: 5,
  },
  lg: {
    breakpoint: { max: 1200, min: 900 },
    items: 4,
  },
  xmd: {
    breakpoint: { max: 900, min: 720 },
    items: 3,
  },
  md: {
    breakpoint: { max: 720, min: 480 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 480, min: 280 },
    items: 1,
  },
}

const popularProductsResponsive = {
  xlg: {
    breakpoint: { max: 2100, min: 1200 },
    items: 5,
  },
  lg: {
    breakpoint: { max: 2100, min: 1440 },
    items: 4,
  },
  xmd: {
    breakpoint: { max: 1440, min: 766 },
    items: 3,
  },
  md: {
    breakpoint: { max: 766, min: 320 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
}

const customerReviewsCarouselResponsive = {
  lg: {
    breakpoint: { max: 2100, min: 1800 },
    items: 4,
  },
  xmd: {
    breakpoint: { max: 1800, min: 1440 },
    items: 3,
  },
  md: {
    breakpoint: { max: 1440, min: 768 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
}

const guaranteeCarouselResponsive = {
  sm: {
    breakpoint: { max: 2100, min: 0 },
    items: 1,
  },
}

interface RatingObject {
  id: string
  from: string
  logoUrl: string
  rateTitle: string
  avarageRating: number
  reviewsCount: number
}

interface PopularProduct {
  id: string
  title: string
  imageUrl: string
  description: string
  category: string
  producer: string
  price: number
}

interface discountedProduct {
  id: string
  title: string
  imageUrl: string
  description: string
  category: string
  producer: string
  actualPrice: number
  discountedPrice: number
  discountPercent: number
}

interface IProps {
  ratings: Array<RatingObject>
  popularProducts: Array<PopularProduct>
  discountedProducts: Array<discountedProduct>
}

const Home: NextPage<IProps> = ({
  ratings,
  popularProducts,
  discountedProducts,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <header className="py-[10px] md:py-[18px] px-5 md:px-10 customXl:px-20 mb-8 md:mb-0 flex flex-row justify-between items-center">
        <img
          src="img/logos/logo.png"
          alt="logo"
          className="w-32 md:w-[149px]"
        />
        <div role="menu" className="hidden customXl:inline">
          {[
            "Shop by Product",
            "Shop by Animal",
            "About",
            "Dosage",
            "Contact",
            "Blog",
          ].map((text) => (
            <span
              className="text-lg mx-[10px] my-[15px] cursor-pointer"
              key={text}
            >
              {text}
            </span>
          ))}
        </div>
        <div role="burger-and-basket-container" className="inline-flex">
          <div className="hidden md:inline-flex justify-center items-center p-[15px] h-[54px]">
            <img
              src="img/icons/search.png"
              alt="search"
              className="w-[19px] customXl:block hidden"
            />
            <img
              src="img/icons/add.png"
              alt="search"
              className="w-5 md:block customXl:hidden hidden"
            />
          </div>
          <div className="hidden md:inline-flex h-[54px] w-[54px] items-center justify-center border border-solid border-[#C5C7D3] rounded-sm mx-5">
            <img
              src="img/icons/user.png"
              alt="search"
              className="w-3 customXl:block hidden"
            />
            <img
              src="img/icons/add.png"
              alt="search"
              className="w-5 md:block customXl:hidden hidden"
            />
          </div>
          <div role="basketInfo" className="inline-flex md:h-[54px]">
            <span className="flex items-center justify-center md:text-base text-xs p-3 bg-[#E3F2F2] h-full rounded-l-sm">
              2 - $56.90
            </span>
            <span className="bg-[#262626] w-10 md:w-[54px] flex items-center justify-center rounded-r-sm">
              <img
                src="img/icons/shopping-cart.png"
                alt="basket"
                className="h-5 block md:hidden customXl:block"
              />
              <img
                src="img/icons/addWhite.png"
                alt="basket"
                className="h-5 hidden md:block customXl:hidden"
              />
            </span>
          </div>
          <div
            role="basketInfo"
            className="inline-flex customXl:hidden items-center md:h-[54px] md:pl-5 pl-[10px]"
          >
            <img
              src="img/icons/burger.png"
              alt="burgerMenu"
              className={`md:w-10 md:h-8 w-[29px] cursor-pointer ${
                !isMenuOpen ? "block" : "hidden"
              }`}
              onClick={() => setIsMenuOpen(true)}
            />
            <img
              src="img/icons/close.png"
              alt="closeMenu"
              className={`md:w-10 md:h-10 w-[29px] cursor-pointer ${
                isMenuOpen ? "block" : "hidden"
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </header>
      <div className="h-[411px] md:h-[434px] customXl:h-[438px] bg-[#E3F2F2] overflow-hidden relative">
        <div className="absolute top-[30px] left-5 md:top-[75px] md:left-10 customXl:top-20 customXl:left-[190px]">
          <div className="text-[32px] leading-[42px] md:text-[40px] md:leading-[52px] font-bold customXl:mb-[10px]">
            Set your pet at ease!
          </div>
          <div className="flex items-center text-lg font-[500] py-0.5">
            <img src="img/icons/trees.png" alt="" />
            <span>Organic & Natural Ingradients</span>
          </div>
          <div className="flex items-center text-lg font-[500] py-0.5">
            <img src="img/icons/color-picker.png" alt="" />
            <span>Lab-Tested</span>
          </div>
          <div className="flex items-center text-lg font-[500] py-0.5">
            <img src="img/icons/open-collective.png" alt="" />
            <span>Full-Spectrum</span>
          </div>
          <button className="bg-[#067D7B] border-0 text-white text-lg leading-[25px] px-[25px] py-4 rounded-sm mt-[30px] customXl:mt-10">
            Buy now
          </button>
        </div>
        <img
          src="img/manAndDog.png"
          className="w-[246px] md:w-[345px] customXl:w-[381px] md:h-[415px] customXl:h-[457.95px] absolute right-[-40px] top-[161px] md:right-[25px] md:top-[19px] customXl:top-0 customXl:right-[190px]"
        />
      </div>
      <div role="carouselWrapper" className="bannerCarouselWrapper">
        <Carousel
          showDots={true}
          responsive={bannerResponsive}
          infinite={true}
          renderDotsOutside={true}
          partialVisible={true}
        >
          {ratings.map((item) => (
            <div className="cardWrapper">
              <div className="p-5 w-[276px]">
                <img
                  src={`img/logos/${item.logoUrl}`}
                  alt=""
                  className="h-10"
                />
                <div className="flex">
                  <span className="flex items-center text-[20px]">
                    {item.rateTitle}
                  </span>
                  <span className="flex pl-5">
                    <span className="flex items-center text-[22px] leading-[35px] font-medium text-[#067D7B] mr-0.5">
                      {item.avarageRating}
                    </span>
                    <ReactStars
                      count={5}
                      isHalf={true}
                      activeColor="#067D7B"
                      color="#d2dada"
                      value={item.avarageRating}
                      edit={false}
                      size={20}
                    />
                  </span>
                </div>
                <div className="text-[14px] leading-[25px] text-[#484C56]">
                  {item.reviewsCount} reviews
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <section
        role="mostPopularProductsSection"
        className="mt-[82px] md:mt-[105px] customXl:mt-[132px]"
      >
        <div className="mx-5 md:mx-10 customXl:mx-[190px]">
          <h1 className="text-[28px] leading-[36.4px] md:text-[35px] md:leading-[45.5px] font-bold">
            Our Most Popular Products
          </h1>
          <div className="relative customXl:flex items-center">
            <button className="px-2 py-4 rounded-sm customXl:text-[18px] text-[#484C56] activeBtn">
              Dog Treats
            </button>
            <button className="px-2 py-4 rounded-sm customXl:text-[18px] text-[#484C56]">
              Cat Treats
            </button>
            <button className="px-2 py-4 rounded-sm customXl:text-[18px] text-[#484C56]">
              CBD Tinctures
            </button>
            <button className="px-2 py-4 rounded-sm customXl:text-[18px] text-[#484C56]">
              CBD Capsules
            </button>
            <span className="rounded-sm relative bg-[#F1F2F7] block mt-[10px] md:inline-flex items-center md:mt-0 md:absolute right-0">
              <select
                name="typeOfPet"
                className="bg-[#F1F2F7] text-[#262626] block  outline-none text-base appearance-none w-[184px] py-2 px-4"
              >
                <option className="text-base" value="default">
                  Type of Pet
                </option>
                <option className="text-base" value="dog">
                  Dog
                </option>
                <option className="text-base" value="cat">
                  Cat
                </option>
              </select>
              <img
                src="img/icons/customSelectArrow.png"
                className="w-[17px] h-[8.5px] inline-block absolute right-4 pointer-events-none top-[10px] md:top-auto"
              />
            </span>
          </div>
        </div>
        <div
          role="carouselWrapper"
          className="popularProductsCarouselWrapper mt-20 mx-5 relative"
        >
          <Carousel
            showDots={true}
            responsive={popularProductsResponsive}
            infinite={true}
            renderDotsOutside={true}
            partialVisbile={true}
          >
            {popularProducts.map((item) => (
              <div className="flex justify-center">
                <div>
                  <img
                    src={`img/mostPopularProducts/${item.imageUrl}`}
                    className="w-[155px] md:w-[210px] customXl:w-[300px] rounded-sm"
                  />
                  <div className="w-[155px] md:w-[210px] customXl:w-[300px]">
                    <div className="text-[18px] md:text-[20px] leading-8 text-[#262626] font-medium mt-5">
                      {item.title}
                    </div>
                    <div className="text-[13px] leading-[26px] md:text-[16] md:leading-8 text-[#484C56] mt-[10px]">
                      {item.producer}
                    </div>
                    <div className="text-xl text-[#262626] font-medium">
                      $ {item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <h3 className="mx-5 md:mx-10 customXl:mx-[190px] mt-[82px] md:mt-[102px] customXl:mt-[132px] mb-5 customXl:mb-10 text-[28px] leading-[36px] md:text-[36px] md:leading-[46px] font-bold">
        Shop by Concern
      </h3>
      <div className="mb-20 md:mb-[100px] customXl:mb-[116px] grid grid-cols-2 customXl:grid-cols-4 gap-[10px] md:gap-5 customXl:gap-7  mx-5 md:mx-10 customXl:mx-20">
        <div className="concernCard">
          <img
            src="img/icons/reliefIcon.png"
            className="w-[60px] h-[60px] mb-5"
          />
          <div>Relief</div>
        </div>
        <div className="concernCard">
          <img
            src="img/icons/mobilityIcon.png"
            className="w-[60px] h-[60px] mb-5"
          />
          <div>Mobility</div>
        </div>
        <div className="concernCard">
          <img
            src="img/icons/calmIcon.png"
            className="w-[60px] h-[60px] mb-5"
          />
          <div>Calm</div>
        </div>
        <div className="concernCard">
          <img
            src="img/icons/wellnessIcon.png"
            className="w-[60px] h-[60px] mb-5"
          />
          <div>Wellness</div>
        </div>
      </div>
      <div className="bg-[#067D7B] px-5 md:px-10 customXl:px-[190px] text-white relative overflow-hidden mb-20 md:mb-[100px] customXl:mb-[130px]">
        <img
          src="img/pattern.png"
          className="absolute -left-1.5 bottom-[-20px] w-[390px] customXl:w-[600px] md:bottom-[18px] md:left-0 customXl:left-[112px] customXl:bottom-[-32px]"
        />
        <div className="bg-transparent md:grid grid-cols-2">
          <div className="mt-[60px]">
            <h2 className="text-[26px] leading-[34px] md:text-[32px] md:leading-[42px] font-semibold mb-2">
              Our story
            </h2>
            <div className="ourStoryContent bg-inherit">
              Starting Pet Hemp Company was inspired by our family dog, Woody, a
              grey-haired labradoodle who graced our lives for over 13 years. We
              often referred to him as the “mayor” because he was so friendly
              with other animals. Starting Pet Hemp Company was inspired by our
              family dog, Woody, a grey-haired labradoodle who graced our lives
              for over 13 years. We often referred to him as the “mayor” because
              he was so friendly with other animals. Starting Pet Hemp Company
              was inspired by our family dog, Woody, a grey-haired labradoodle
              who graced our lives for over 13 years. We often referred to him
              as the “mayor” because he was so friendly with other animals.
              Starting Pet Hemp Company was inspired by our family dog, Woody, a
              grey-haired labradoodle who graced our lives for over 13 years. We
              often referred to him as the “mayor” because he was so friendly
              with other animals. Starting Pet Hemp Company was inspired by our
              family dog, Woody, a grey-haired labradoodle who graced our lives
              for over 13 years. We often referred to him as the “mayor” because
              he was so friendly with other animals. Starting Pet Hemp Company
              was inspired by our family dog, Woody, a grey-haired labradoodle
              who graced our lives for over 13 years. We often referred to him
              as the “mayor” because he was so friendly with other animals.
            </div>
            <button className="text-[16px] leading-[20px] py-[10px] customXl:py-4 px-[25px] mt-5 md:mt-[30px] font-bold text-[#067D7B] bg-[#FFFFFF] rounded-sm">
              Learn more
            </button>
          </div>
          <div className="relative left-[100px] md:left-0 md:-order-1">
            <img
              src="img/dog.png"
              className="w-[220px] md:w-[333px] customXl:w-[367px] customXl:mt-[30px]"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-10 customXl:px-[190px] grid grid-cols-1 gap-[30px] md:gap-5 md:grid-cols-2 mb-20 md:mb-[100px] customXl:mb-[130px]">
        <div className="py-[46px] md:py-[36px] customXl:py-10 px-[30px] md:px-10 bg-[#E3F2F2] rounded-sm">
          <div className="flex flex-col items-center">
            <img
              src="img/guarantee.png"
              className="md:w-20 customXl:w-[140px]"
            />
            <div className="text-[26px] leading-[34px] md:text-[32px] md:leading-[42px] customXl:text-[36px] customXl:leading-[46px] font-semibold my-[10px] customXl:mt-5 text-center">
              Our Trusted Guarantee
            </div>
            <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 customXl:text-[20px] customXl:leading-[38px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <button className="text-white bg-[#067D7B] rounded-sm py-[10px] px-[25px] customXl:py-4 mt-[10px] md:mt-5">
              Shop Now
            </button>
          </div>
        </div>

        <div className="py-[46px] md:py-[36px] customXl:py-10 px-[30px] md:px-10 rounded-sm guaranteeCarouselWrapper">
          <Carousel
            responsive={guaranteeCarouselResponsive}
            infinite={true}
            arrows={false}
            showDots={true}
            renderDotsOutside={true}
          >
            <div className="flex flex-col items-center">
              <img
                src="img/leaf.png"
                className="md:w-[70px] customXl:w-[130px]"
              />
              <div className="text-[22px] leading-[34px] customXl:text-[32px] customXl:leading-[42px] font-semibold my-[10px] customXl:mt-5 text-center">
                All natural
              </div>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 customXl:text-[20px] customXl:leading-[38px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="img/leaf.png"
                className="md:w-[70px] customXl:w-[130px]"
              />
              <div className="text-[22px] leading-[34px] customXl:text-[32px] customXl:leading-[42px] font-semibold my-[10px] customXl:mt-5 text-center">
                All natural
              </div>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 customXl:text-[20px] customXl:leading-[38px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="img/leaf.png"
                className="md:w-[70px] customXl:w-[130px]"
              />
              <div className="text-[22px] leading-[34px] customXl:text-[32px] customXl:leading-[42px] font-semibold my-[10px] customXl:mt-5 text-center">
                All natural
              </div>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 customXl:text-[20px] customXl:leading-[38px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="px-5 md:px-10 customXl:px-20 mb-[85px] md:mb-[150px] customXl:mb-[85px]">
        <h1 className="text-[28px] md:text-[36px] font-bold mb-5 customXl:mb-10 customXl:mx-[110px]">
          Key Ways That CBD Can Help
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 customXl:grid-cols-4 customXl:gap-[30px]">
          <div className="customXl:flex items-start">
            <img
              src="img/icons/ribbon.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Cancer & Tumors
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                Cancer Treatment and Chemotherapy has many side effects that can
                be reduced with Pet Hemp CBD.
              </div>
            </div>
          </div>
          <div className="customXl:flex items-start">
            <img
              src="img/icons/mobility-icon.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Joints & Mobility
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                Pet immobility is heartbreaking. Pet Hemp CBD helps with
                limping, arthritis, joint disease, Hip Dysplasia, pain and
                inflammatory.
              </div>
            </div>
          </div>
          <div className="customXl:flex items-start">
            <img
              src="img/icons/brain.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Seizures & Epilepsy
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                Pet Hemp CBD can reduce epileptic seizures, convulsions and
                other neurological disorders.
              </div>
            </div>
          </div>
          <div className="customXl:flex items-start">
            <img
              src="img/icons/cloud-lightning.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Stress & Anxiety
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                Phobias, stress and anxiety caused by loud noise or separation
                anxiety can be remedied with Pet Hemp CBD.
              </div>
            </div>
          </div>
          <div className="customXl:flex items-start">
            <img
              src="img/icons/stomach.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Digestive & Nausea
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                CBD can improve problems such as nausea, acute digestive
                problems with vomiting and diarrhea.
              </div>
            </div>
          </div>
          <div className="customXl:flex items-start">
            <img
              src="img/icons/heart.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Aging & Wellness
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                Pet Hemp can improve Quality of Life in aging pets and build
                immune system for long term wellness.
              </div>
            </div>
          </div>
          <div className="customXl:flex items-start">
            <img
              src="img/icons/allergies.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Skin & Allergies
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                Skin diseases and skin allergies can cause a variety of issues
                including odor, sores, excessive itching, chewing and hair loss.
              </div>
            </div>
          </div>
          <div className="customXl:flex items-start">
            <img
              src="img/icons/zap.png"
              className="mb-[10px] customXl:mr-[10px]"
            />
            <div>
              <h3 className="text-5 leading-[35px] md:text-[22px] font-medium">
                Pain & Inflammation
              </h3>
              <div className="text-[13px] leading-[26px] md:text-[16px] md:leading-8 text-[#484C56]">
                Pet pain can be caused by Swelling, Arthritis, Pancreatitis,
                Bronchitis, & and other ailments.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="img/cat.png" className="w-full" />
          </div>
          <div className="px-5">
            <div>
              <img src="img/icons/drop-opacity.png" className="h-9 mb-[10px]" />
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold mb-1">
              Dosage Chart
            </h3>
            <div className="text-[#484C56] md:text-[18px]">
              Are you looking for the correct dosage size of CBD oil for pet?
            </div>
            <button className="w-full text-white text-[18px] py-4 bg-[#067D7B] rounded-sm mt-[30px]">
              learn more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 mb-32">
          <div>
            <img src="img/dogWithClothes.png" className="w-full" />
          </div>
          <div className="px-5 md:-order-1">
            <div>
              <img src="img/icons/colorPicker.png" className="h-9 mb-[10px]" />
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold mb-1">
              Dosage Chart
            </h3>
            <div className="text-[#484C56] md:text-[18px]">
              Are you looking for the correct dosage size of CBD oil for pet?
            </div>
            <button className="w-full text-white text-[18px] py-4 bg-[#067D7B] rounded-sm mt-[30px]">
              learn more
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 customXl:px-20 mb-[82px] md:mb-[102px] customXl:mb-[132px]">
        <h1 className="text-[28px] md:text-[36px] font-bold mb-5 customXl:mb-10 customXl:mx-[110px]">
          Customer Reviews
        </h1>
        <div
          role="carouselWrapper"
          className="customerReviewsCarouselWrapper relative"
        >
          <Carousel
            showDots={true}
            responsive={customerReviewsCarouselResponsive}
            infinite={true}
            renderDotsOutside={true}
            partialVisbile={true}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src="img/customerReviews/video1.png"
                className="rounded-sm mb-[30px] w-[320px] md:w-[334px] customXl:w-[409px]"
              />
              <div className="w-[320px] md:w-[334px] customXl:w-[409px]">
                <ReactStars
                  count={5}
                  isHalf={true}
                  activeColor="#067D7B"
                  color="#d2dada"
                  value={4.5}
                  edit={false}
                  size={25}
                />
                <div className="text-[18px] md:text-[20px] leading-8 text-[#262626] font-medium mt-5">
                  Great for my dog
                </div>
                <div className="text-[18px] md:text-[20px] md:leading-8 text-[#484C56] mt-[10px]">
                  Thus product seems to work well though we have only gone
                  through one bottle.”
                </div>
                <div className="mt-5 text-[14px]">
                  Nichole P. <br />
                  CBD Oil for Dogs & Cats
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="img/customerReviews/video2.png"
                className="rounded-sm mb-[30px] w-[320px] md:w-[334px] customXl:w-[409px]"
              />
              <div className="w-[320px] md:w-[334px] customXl:w-[409px]">
                <ReactStars
                  count={5}
                  isHalf={true}
                  activeColor="#067D7B"
                  color="#d2dada"
                  value={4.5}
                  edit={false}
                  size={25}
                />
                <div className="text-[18px] md:text-[20px] leading-8 text-[#262626] font-medium mt-5">
                  Great for my dog
                </div>
                <div className="text-[18px] md:text-[20px] md:leading-8 text-[#484C56] mt-[10px]">
                  Thus product seems to work well though we have only gone
                  through one bottle.”
                </div>
                <div className="mt-5 text-[14px]">
                  Nichole P. <br />
                  CBD Oil for Dogs & Cats
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="img/customerReviews/video3.png"
                className="rounded-sm mb-[30px] w-[320px] md:w-[334px] customXl:w-[409px]"
              />
              <div className="w-[320px] md:w-[334px] customXl:w-[409px]">
                <ReactStars
                  count={5}
                  isHalf={true}
                  activeColor="#067D7B"
                  color="#d2dada"
                  value={4.5}
                  edit={false}
                  size={25}
                />
                <div className="text-[18px] md:text-[20px] leading-8 text-[#262626] font-medium mt-5">
                  Great for my dog
                </div>
                <div className="text-[18px] md:text-[20px] md:leading-8 text-[#484C56] mt-[10px]">
                  Thus product seems to work well though we have only gone
                  through one bottle.”
                </div>
                <div className="mt-5 text-[14px]">
                  Nichole P. <br />
                  CBD Oil for Dogs & Cats
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="img/customerReviews/video1.png"
                className="rounded-sm mb-[30px] w-[320px] md:w-[334px] customXl:w-[409px]"
              />
              <div className="w-[320px] md:w-[334px] customXl:w-[409px]">
                <ReactStars
                  count={5}
                  isHalf={true}
                  activeColor="#067D7B"
                  color="#d2dada"
                  value={4.5}
                  edit={false}
                  size={25}
                />
                <div className="text-[18px] md:text-[20px] leading-8 text-[#262626] font-medium mt-5">
                  Great for my dog
                </div>
                <div className="text-[18px] md:text-[20px] md:leading-8 text-[#484C56] mt-[10px]">
                  Thus product seems to work well though we have only gone
                  through one bottle.”
                </div>
                <div className="mt-5 text-[14px]">
                  Nichole P. <br />
                  CBD Oil for Dogs & Cats
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="img/customerReviews/video2.png"
                className="rounded-sm mb-[30px] w-[320px] md:w-[334px] customXl:w-[409px] h-[230px] md:h-[219px] customXl:h-[245px]"
              />
              <div className="w-[320px] md:w-[334px] customXl:w-[409px]">
                <ReactStars
                  count={5}
                  isHalf={true}
                  activeColor="#067D7B"
                  color="#d2dada"
                  value={4.5}
                  edit={false}
                  size={25}
                />
                <div className="text-[18px] md:text-[20px] leading-8 text-[#262626] font-medium mt-5">
                  Great for my dog
                </div>
                <div className="text-[18px] md:text-[20px] md:leading-8 text-[#484C56] mt-[10px]">
                  Thus product seems to work well though we have only gone
                  through one bottle.”
                </div>
                <div className="mt-5 text-[14px]">
                  Nichole P. <br />
                  CBD Oil for Dogs & Cats
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="px-5 md:px-10 customXl:px-20 mb-[82px] md:mb-[102px] customXl:mb-[132px]">
        <h1 className="text-[28px] md:text-[36px] font-bold mb-5 customXl:mb-10 customXl:mx-[110px]">
          Bundle and save
        </h1>
        <div
          role="carouselWrapper"
          className="bundleAndSaveCarouselWrapper relative"
        >
          <Carousel
            showDots={true}
            responsive={customerReviewsCarouselResponsive}
            infinite={true}
            renderDotsOutside={true}
            partialVisbile={true}
          >
            {discountedProducts.map((item) => (
              <div className="flex flex-col justify-center items-center">
                <img
                  src={`img/bundleAndSave/${item.imageUrl}`}
                  className="rounded-sm mb-5 w-[320px] md:w-[334px] customXl:w-[409px]"
                />
                <div className="w-[320px] md:w-[334px] customXl:w-[409px]">
                  <div className="text-[18px] md:text-[20px] leading-8 text-[#262626] font-medium">
                    {item.title}
                  </div>
                  <div className="text-[14px] leading-[26px]">
                    {item.producer}
                  </div>
                  <div className="text-[18px] md:text-[22px] leading-[26px] font-semibold text-[#067D7B] line-through mt-[10px]">
                    $ {item.actualPrice.toFixed(2)}
                  </div>
                  <div className="flex justify-start items-center">
                    <span>Only $ {item.discountedPrice.toFixed(2)}</span>
                    <span className="text-base px-5 py-[7px] rounded-full bg-[#262626] text-white ml-[10px]">
                      -{item.discountPercent}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="px-5 md:px-10 customXl:px-20 mb-[82px] md:mb-[132px] customXl:mb-[232px]">
        <div className="customXl:mx-[110px] customXl:mb-10 customXl:flex items-center justify-between">
          <h1 className="text-[28px] md:text-[36px] font-bold">
            We love our community
          </h1>
          <div className="flex items-center mt-[10px] mb-5 md:mt-5">
            <img
              src="img/icons/instagramIcon.png"
              className="w-[25px] customXl:w-[34px]"
            />
            <span className="text-[#067D7B] text-[15px] md:text-[18px] customXl:text-[24px] underline ml-4">
              Follow us in Instagram
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[15px] customXl:gap-[28px]">
          <img src="img/social/leftImage.png" className="w-full" />
          <div className="grid grid-cols-2 gap-[10px] md:gap-[15px] customXl:gap-[28px]">
            <img src="img/social/img1.png" className="w-full" />
            <img src="img/social/img2.png" className="w-full" />
            <img src="img/social/img3.png" className="w-full" />
            <img src="img/social/img4.png" className="w-full" />
          </div>
        </div>
      </div>

      <div className="bg-[#067D7B] px-5 md:px-10 customXl:px-[189px] py-5 md:py-[30px] customXl:py-[50px] flex justify-end relative ">
        <img
          src="img/footerLayer.png"
          className="hidden md:inline-block absolute left-[-57px] bottom-2 customXl:bottom-5 customXl:left-[90px] md:h-[239px] customXl:h-[347px]"
        />
        <div className="text-white">
          <h1 className="font-semibold text-[26px] md:text-[32px]">
            Subscribe to Newsletter
          </h1>
          <div className="text-[18px] md:text-5 mb-5 customXl:mb-[30px]">
            Subscribe to our newsletter & stay updated
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="h-[54px] placeholder:text-white w-[169px] md:w-[230px] customXl:w-[323px] border px-5 py-2.5 rounded-sm bg-transparent"
            />
            <button className="text-[#067D7B] w-[143px] md:w-[153px] customXl:w-[184px] h-[54px] ml-2.5 inline-flex justify-center items-center bg-white rounded-sm">
              Subscribe now
            </button>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res1 = await axios.get("http://localhost:4242/top_banner_ratings")
  const res2 = await axios.get("http://localhost:4242/popular_products")
  const res3 = await axios.get("http://localhost:4242/discounted_products")
  return {
    props: {
      ratings: res1.data,
      popularProducts: res2.data,
      discountedProducts:res3.data
    },
  }
}
