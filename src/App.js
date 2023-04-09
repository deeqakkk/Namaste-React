import './App.css';

const Title = () => {
  return (
    <a href='/'>
      <img
        src='https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?w=740&t=st=1681018426~exp=1681019026~hmac=d55cc3ac4dbe23bc7d880f2f55dec69ae556bb43ea4b73e5da71f6dde451aa96'
        alt='logo'
        className='logo'
      />
    </a>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <h2>Food Lists</h2>
      <div className='restaurant-list'>
        {restaurantData.map((restaurant) => {
          return (
            <ResturantCard
              {...restaurant.data}
              key={restaurant.data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Career</li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return <h5>Footer</h5>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const restaurantData = [
  {
    'type': 'restaurant',
    'data': {
      'type': 'F',
      'id': '16547',
      'name': 'Om Sweets & Snacks',
      'uuid':
        'd5ddff71-4cd4-45fe-b372-c8f47cc9d07c',
      'city': '2',
      'area': 'Sector 45',
      'totalRatingsString': '10000+ ratings',
      'cloudinaryImageId': 'xyiobbzhlictlgxyojup',
      'cuisines': [
        'Sweets',
        'North Indian',
        'South Indian',
        'Chinese',
        'Snacks',
        'Desserts',
        'Bakery',
      ],
      'tags': [],
      'costForTwo': 40000,
      'costForTwoString': '₹400 FOR TWO',
      'deliveryTime': 26,
      'minDeliveryTime': 26,
      'maxDeliveryTime': 26,
      'slaString': '26 MINS',
      'lastMileTravel': 1.7000000476837158,
      'slugs': {
        'restaurant':
          'om-sweets-huda-city-huda-city',
        'city': 'gurgaon',
      },
      'cityState': '2',
      'address':
        "Shop No. 135-136, Huda Market, Sector 46 Near domino's pizza",
      'locality': 'Huda Market',
      'parentId': 676,
      'unserviceable': false,
      'veg': true,
      'select': false,
      'favorite': false,
      'tradeCampaignHeaders': [],
      'chain': [],
      'feeDetails': {
        'fees': [
          {
            'name': 'distance',
            'fee': 3600,
            'message': '',
          },
          {
            'name': 'time',
            'fee': 0,
            'message': '',
          },
          {
            'name': 'special',
            'fee': 0,
            'message': '',
          },
        ],
        'totalFees': 3600,
        'message': '',
        'title': 'Delivery Charge',
        'amount': '3600',
        'icon': '',
      },
      'availability': {
        'opened': true,
        'nextOpenMessage': '',
        'nextCloseMessage': '',
      },
      'longDistanceEnabled': 0,
      'rainMode': 'NONE',
      'thirdPartyAddress': false,
      'thirdPartyVendor': '',
      'adTrackingID': '',
      'badges': {
        'imageBased': [],
        'textBased': [],
        'textExtendedBadges': [],
      },
      'lastMileTravelString': '1.7 kms',
      'hasSurge': false,
      'sla': {
        'restaurantId': '16547',
        'deliveryTime': 26,
        'minDeliveryTime': 26,
        'maxDeliveryTime': 26,
        'lastMileTravel': 1.7000000476837158,
        'lastMileDistance': 0,
        'serviceability': 'SERVICEABLE',
        'rainMode': 'NONE',
        'longDistance': 'NOT_LONG_DISTANCE',
        'preferentialService': false,
        'iconType': 'EMPTY',
      },
      'promoted': false,
      'avgRating': '4.3',
      'totalRatings': 10000,
      'new': false,
    },
    'subtype': 'basic',
  },
  {
    'type': 'restaurant',
    'data': {
      'type': 'F',
      'id': '92638',
      'name': 'Burger King',
      'uuid':
        '65e9cb98-b981-484c-856b-cf27c1642000',
      'city': '2',
      'area': 'Sector 52',
      'totalRatingsString': '10000+ ratings',
      'cloudinaryImageId':
        '28fb13049b4e55297bb3f703cde63c35',
      'cuisines': ['Burgers', 'American'],
      'tags': [],
      'costForTwo': 35000,
      'costForTwoString': '₹350 FOR TWO',
      'deliveryTime': 29,
      'minDeliveryTime': 29,
      'maxDeliveryTime': 29,
      'slaString': '29 MINS',
      'lastMileTravel': 2.4000000953674316,
      'slugs': {
        'restaurant':
          'burger-king-ardee-mall-jalvayu-towers',
        'city': 'gurgaon',
      },
      'cityState': '2',
      'address':
        'UNIT NO 8, FOOD COURT, 3rd FLOOR, ARDEE MALL ARDEE CITY SEC 52, GURGAON, HARYANA-122003',
      'locality': 'Ardee Mall',
      'parentId': 166,
      'unserviceable': false,
      'veg': false,
      'select': false,
      'favorite': false,
      'tradeCampaignHeaders': [],
      'aggregatedDiscountInfo': {
        'header': 'Get every item under 129',
        'shortDescriptionList': [
          {
            'meta': 'Get every item under 129',
            'discountType': 'FinalPrice',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta': 'Get every item under 129',
            'discountType': 'FinalPrice',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'aggregatedDiscountInfoV2': {
        'header': '',
        'shortDescriptionList': [
          {
            'meta': '',
            'discountType': 'FinalPrice',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta': 'Get every item under 129',
            'discountType': 'FinalPrice',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'chain': [],
      'feeDetails': {
        'fees': [
          {
            'name': 'distance',
            'fee': 3600,
            'message': '',
          },
          {
            'name': 'time',
            'fee': 0,
            'message': '',
          },
          {
            'name': 'special',
            'fee': 0,
            'message': '',
          },
        ],
        'totalFees': 3600,
        'message': '',
        'title': 'Delivery Charge',
        'amount': '3600',
        'icon': '',
      },
      'availability': {
        'opened': true,
        'nextOpenMessage': '',
        'nextCloseMessage': '',
      },
      'longDistanceEnabled': 0,
      'rainMode': 'NONE',
      'thirdPartyAddress': false,
      'thirdPartyVendor': '',
      'adTrackingID': '',
      'badges': {
        'imageBased': [],
        'textBased': [],
        'textExtendedBadges': [],
      },
      'lastMileTravelString': '2.4 kms',
      'hasSurge': false,
      'sla': {
        'restaurantId': '92638',
        'deliveryTime': 29,
        'minDeliveryTime': 29,
        'maxDeliveryTime': 29,
        'lastMileTravel': 2.4000000953674316,
        'lastMileDistance': 0,
        'serviceability': 'SERVICEABLE',
        'rainMode': 'NONE',
        'longDistance': 'NOT_LONG_DISTANCE',
        'preferentialService': false,
        'iconType': 'EMPTY',
      },
      'promoted': false,
      'avgRating': '4.1',
      'totalRatings': 10000,
      'new': false,
    },
    'subtype': 'basic',
  },
  {
    'type': 'restaurant',
    'data': {
      'type': 'F',
      'id': '557228',
      'name': 'Chef Mantra',
      'uuid':
        '849fab30-f32e-492e-a7ef-80daba41b82a',
      'city': '2',
      'area': 'Sector 45',
      'totalRatingsString': '5000+ ratings',
      'cloudinaryImageId': 'h7wbfbhtwsagfa4ecklk',
      'cuisines': [
        'North Indian',
        'Chinese',
        'Snacks',
      ],
      'tags': [],
      'costForTwo': 30000,
      'costForTwoString': '₹300 FOR TWO',
      'deliveryTime': 26,
      'minDeliveryTime': 26,
      'maxDeliveryTime': 26,
      'slaString': '26 MINS',
      'lastMileTravel': 1.600000023841858,
      'slugs': {
        'restaurant':
          'chef-mantra-old-gurgaon-(zone-6)-old-gurgaon-(zone-6)',
        'city': 'gurgaon',
      },
      'cityState': '2',
      'address':
        'Jal Vihar, Jal Vihar Colony, Sector 46, Gurugram, Haryana 122003',
      'locality': 'Jal Vihar Colony',
      'parentId': 334962,
      'unserviceable': false,
      'veg': false,
      'select': false,
      'favorite': false,
      'tradeCampaignHeaders': [],
      'aggregatedDiscountInfo': {
        'header': 'FLAT125 off',
        'shortDescriptionList': [
          {
            'meta': 'FLAT125 off | Use FLATDEAL',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta': 'FLAT125 off | Use FLATDEAL',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'aggregatedDiscountInfoV2': {
        'header': '₹125 OFF',
        'shortDescriptionList': [
          {
            'meta': 'Use FLATDEAL',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta': 'FLAT125 off | Use FLATDEAL',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'ribbon': [
        {
          'type': 'PROMOTED',
        },
      ],
      'chain': [],
      'feeDetails': {
        'fees': [
          {
            'name': 'distance',
            'fee': 3600,
            'message': '',
          },
          {
            'name': 'time',
            'fee': 0,
            'message': '',
          },
          {
            'name': 'special',
            'fee': 0,
            'message': '',
          },
        ],
        'totalFees': 3600,
        'message': '',
        'title': 'Delivery Charge',
        'amount': '3600',
        'icon': '',
      },
      'availability': {
        'opened': true,
        'nextOpenMessage': '',
        'nextCloseMessage': '',
      },
      'longDistanceEnabled': 0,
      'rainMode': 'NONE',
      'thirdPartyAddress': false,
      'thirdPartyVendor': '',
      'adTrackingID':
        'cid=6393747~p=4~eid=00000187-64b4-96b8-1d1e-c1f200a70406',
      'badges': {
        'imageBased': [],
        'textBased': [],
        'textExtendedBadges': [],
      },
      'lastMileTravelString': '1.6 kms',
      'hasSurge': false,
      'sla': {
        'restaurantId': '557228',
        'deliveryTime': 26,
        'minDeliveryTime': 26,
        'maxDeliveryTime': 26,
        'lastMileTravel': 1.600000023841858,
        'lastMileDistance': 0,
        'serviceability': 'SERVICEABLE',
        'rainMode': 'NONE',
        'longDistance': 'NOT_LONG_DISTANCE',
        'preferentialService': false,
        'iconType': 'EMPTY',
      },
      'promoted': true,
      'avgRating': '4.1',
      'totalRatings': 5000,
      'new': false,
    },
    'subtype': 'basic',
  },
  {
    'type': 'restaurant',
    'data': {
      'type': 'F',
      'id': '693409',
      'name': 'Punjabi Angithi',
      'uuid':
        '19577907-4884-4155-983f-91313c7d4dfe',
      'city': '2',
      'area': 'Sector 39',
      'totalRatingsString': '100+ ratings',
      'cloudinaryImageId':
        'ccbe9cf65c3f4db1762f8c90112e3ccc',
      'cuisines': [
        'North Indian',
        'Punjabi',
        'Tandoor',
        'Chinese',
      ],
      'tags': [],
      'costForTwo': 40000,
      'costForTwoString': '₹400 FOR TWO',
      'deliveryTime': 24,
      'minDeliveryTime': 24,
      'maxDeliveryTime': 24,
      'slaString': '24 MINS',
      'lastMileTravel': 1.7000000476837158,
      'slugs': {
        'restaurant':
          'punjabi-angithi-huda-city-huda-city',
        'city': 'gurgaon',
      },
      'cityState': '2',
      'address':
        'SHOP NO 5, FIRST FLOOR KEVAT NO 152 BY 145, KILA NO 294, Gurgaon, Gurugram, Haryana-122022',
      'locality': 'Kila',
      'parentId': 4464,
      'unserviceable': false,
      'veg': true,
      'select': false,
      'favorite': false,
      'tradeCampaignHeaders': [],
      'aggregatedDiscountInfo': {
        'header': 'Flat ₹125 off',
        'shortDescriptionList': [
          {
            'meta':
              'Flat ₹125 off on orders above ₹249',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta':
              'Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'aggregatedDiscountInfoV2': {
        'header': '₹125 OFF',
        'shortDescriptionList': [
          {
            'meta': 'Use MATCHDEAL125',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta':
              'Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125',
            'discountType': 'Flat',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'ribbon': [
        {
          'type': 'PROMOTED',
        },
      ],
      'chain': [],
      'feeDetails': {
        'fees': [
          {
            'name': 'distance',
            'fee': 3600,
            'message': '',
          },
          {
            'name': 'time',
            'fee': 0,
            'message': '',
          },
          {
            'name': 'special',
            'fee': 0,
            'message': '',
          },
        ],
        'totalFees': 3600,
        'message': '',
        'title': 'Delivery Charge',
        'amount': '3600',
        'icon': '',
      },
      'availability': {
        'opened': true,
        'nextOpenMessage': '',
        'nextCloseMessage': '',
      },
      'longDistanceEnabled': 0,
      'rainMode': 'NONE',
      'thirdPartyAddress': false,
      'thirdPartyVendor': '',
      'adTrackingID':
        'cid=6323479~p=7~eid=00000187-64b4-96b8-1d1e-c1f300a7070a',
      'badges': {
        'imageBased': [],
        'textBased': [],
        'textExtendedBadges': [],
      },
      'lastMileTravelString': '1.7 kms',
      'hasSurge': false,
      'sla': {
        'restaurantId': '693409',
        'deliveryTime': 24,
        'minDeliveryTime': 24,
        'maxDeliveryTime': 24,
        'lastMileTravel': 1.7000000476837158,
        'lastMileDistance': 0,
        'serviceability': 'SERVICEABLE',
        'rainMode': 'NONE',
        'longDistance': 'NOT_LONG_DISTANCE',
        'preferentialService': false,
        'iconType': 'EMPTY',
      },
      'promoted': true,
      'avgRating': '4.3',
      'totalRatings': 100,
      'new': true,
    },
    'subtype': 'basic',
  },
  {
    'type': 'restaurant',
    'data': {
      'type': 'F',
      'id': '254005',
      'name': "McDonald's",
      'uuid':
        'f4398cc4-6dcd-4969-8715-8ce1f5fbeccb',
      'city': '2',
      'area': 'Sector 29',
      'totalRatingsString': '5000+ ratings',
      'cloudinaryImageId':
        '1293a58ab5610f4c730c3d8cb6ac1b65',
      'cuisines': ['American'],
      'tags': [],
      'costForTwo': 40000,
      'costForTwoString': '₹400 FOR TWO',
      'deliveryTime': 27,
      'minDeliveryTime': 27,
      'maxDeliveryTime': 27,
      'slaString': '27 MINS',
      'lastMileTravel': 3.5999999046325684,
      'slugs': {
        'restaurant':
          'mcdonalds-hr-gurgaon-sec-29-huda-city',
        'city': 'gurgaon',
      },
      'cityState': '2',
      'address':
        'HR Gurugram Sector- 29, SCO-36. Main Market, Sector-29, Gurugram-122001',
      'locality': 'Market Road',
      'parentId': 630,
      'unserviceable': false,
      'veg': false,
      'select': false,
      'favorite': false,
      'tradeCampaignHeaders': [],
      'chain': [],
      'feeDetails': {
        'fees': [
          {
            'name': 'distance',
            'fee': 4400,
            'message': '',
          },
          {
            'name': 'time',
            'fee': 0,
            'message': '',
          },
          {
            'name': 'special',
            'fee': 0,
            'message': '',
          },
        ],
        'totalFees': 4400,
        'message': '',
        'title': 'Delivery Charge',
        'amount': '4400',
        'icon': '',
      },
      'availability': {
        'opened': true,
        'nextOpenMessage': '',
        'nextCloseMessage': '',
      },
      'longDistanceEnabled': 0,
      'rainMode': 'NONE',
      'thirdPartyAddress': false,
      'thirdPartyVendor': '',
      'adTrackingID': '',
      'badges': {
        'imageBased': [],
        'textBased': [],
        'textExtendedBadges': [],
      },
      'lastMileTravelString': '3.5 kms',
      'hasSurge': false,
      'sla': {
        'restaurantId': '254005',
        'deliveryTime': 27,
        'minDeliveryTime': 27,
        'maxDeliveryTime': 27,
        'lastMileTravel': 3.5999999046325684,
        'lastMileDistance': 0,
        'serviceability': 'SERVICEABLE',
        'rainMode': 'NONE',
        'longDistance': 'NOT_LONG_DISTANCE',
        'preferentialService': false,
        'iconType': 'EMPTY',
      },
      'promoted': false,
      'avgRating': '4.2',
      'totalRatings': 5000,
      'new': false,
    },
    'subtype': 'basic',
  },
  {
    'type': 'restaurant',
    'data': {
      'type': 'F',
      'id': '340916',
      'name': 'Thalairaj Biryani',
      'uuid':
        'cb55810b-e06e-4442-b536-edc60b7d3b22',
      'city': '2',
      'area': 'Ardee City Road',
      'totalRatingsString': '1000+ ratings',
      'cloudinaryImageId': 'o5thajpnfzum7fpfmhk2',
      'cuisines': [
        'Andhra',
        'Biryani',
        'Hyderabadi',
        'South Indian',
        'Indian',
        'Beverages',
      ],
      'tags': [],
      'costForTwo': 30000,
      'costForTwoString': '₹300 FOR TWO',
      'deliveryTime': 24,
      'minDeliveryTime': 24,
      'maxDeliveryTime': 24,
      'slaString': '24 MINS',
      'lastMileTravel': 2.200000047683716,
      'slugs': {
        'restaurant':
          'thalaivars-biryani-dlf-phase-4-dlf-phase-4',
        'city': 'gurgaon',
      },
      'cityState': '2',
      'address':
        'Ardee Mall, 3rd floor- Food Court, Ardee city Road, Block B, Ardee City, Sector 52, Gurgaon, Haryana - 122022',
      'locality': 'Ardee Mall',
      'parentId': 373895,
      'unserviceable': false,
      'veg': false,
      'select': false,
      'favorite': false,
      'tradeCampaignHeaders': [],
      'aggregatedDiscountInfo': {
        'header': '20% off',
        'shortDescriptionList': [
          {
            'meta': '20% off | Use TRYNEW',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta':
              '20% off up to ₹50 | Use code TRYNEW',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'aggregatedDiscountInfoV2': {
        'header': '20% OFF',
        'shortDescriptionList': [
          {
            'meta': 'Use TRYNEW',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta':
              '20% off up to ₹50 | Use code TRYNEW',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'ribbon': [
        {
          'type': 'PROMOTED',
        },
      ],
      'chain': [],
      'feeDetails': {
        'fees': [
          {
            'name': 'distance',
            'fee': 3600,
            'message': '',
          },
          {
            'name': 'time',
            'fee': 0,
            'message': '',
          },
          {
            'name': 'special',
            'fee': 0,
            'message': '',
          },
        ],
        'totalFees': 3600,
        'message': '',
        'title': 'Delivery Charge',
        'amount': '3600',
        'icon': '',
      },
      'availability': {
        'opened': true,
        'nextOpenMessage': '',
        'nextCloseMessage': '',
      },
      'longDistanceEnabled': 0,
      'rainMode': 'NONE',
      'thirdPartyAddress': false,
      'thirdPartyVendor': '',
      'adTrackingID':
        'cid=6417167~p=10~eid=00000187-64b4-96b8-1d1e-c1f400a70a14',
      'badges': {
        'imageBased': [],
        'textBased': [],
        'textExtendedBadges': [],
      },
      'lastMileTravelString': '2.2 kms',
      'hasSurge': false,
      'sla': {
        'restaurantId': '340916',
        'deliveryTime': 24,
        'minDeliveryTime': 24,
        'maxDeliveryTime': 24,
        'lastMileTravel': 2.200000047683716,
        'lastMileDistance': 0,
        'serviceability': 'SERVICEABLE',
        'rainMode': 'NONE',
        'longDistance': 'NOT_LONG_DISTANCE',
        'preferentialService': false,
        'iconType': 'EMPTY',
      },
      'promoted': true,
      'avgRating': '4.4',
      'totalRatings': 1000,
      'new': false,
    },
    'subtype': 'basic',
  },
  {
    'type': 'restaurant',
    'data': {
      'type': 'F',
      'id': '11670',
      'name': 'Pizza Hut',
      'uuid':
        'ff45e4af-5f93-4a70-86f7-965ea636c4c4',
      'city': '2',
      'area': 'Sector 39',
      'totalRatingsString': '10000+ ratings',
      'cloudinaryImageId': 'du85rw4tipurzzvf6fzv',
      'cuisines': ['Pizzas'],
      'tags': [],
      'costForTwo': 35000,
      'costForTwoString': '₹350 FOR TWO',
      'deliveryTime': 30,
      'minDeliveryTime': 30,
      'maxDeliveryTime': 30,
      'slaString': '30 MINS',
      'lastMileTravel': 1.100000023841858,
      'slugs': {
        'restaurant':
          'pizza-hut-sector-39-huda-city',
        'city': 'gurgaon',
      },
      'cityState': '2',
      'address':
        'Ground Floor, Tower C, Unitech Cyber Park, Sec 39, Gurgaon',
      'locality': 'Unitech Cyber Park',
      'parentId': 721,
      'unserviceable': false,
      'veg': false,
      'select': false,
      'favorite': false,
      'tradeCampaignHeaders': [],
      'aggregatedDiscountInfo': {
        'header': '40% off',
        'shortDescriptionList': [
          {
            'meta': '40% off | Use SWIGGYIT',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta':
              '40% off up to ₹80 | Use code SWIGGYIT',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'aggregatedDiscountInfoV2': {
        'header': '40% OFF',
        'shortDescriptionList': [
          {
            'meta': 'Use SWIGGYIT',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'descriptionList': [
          {
            'meta':
              '40% off up to ₹80 | Use code SWIGGYIT',
            'discountType': 'Percentage',
            'operationType': 'RESTAURANT',
          },
        ],
        'subHeader': '',
        'headerType': 0,
        'superFreedel': '',
      },
      'chain': [],
      'feeDetails': {
        'fees': [
          {
            'name': 'distance',
            'fee': 3600,
            'message': '',
          },
          {
            'name': 'time',
            'fee': 0,
            'message': '',
          },
          {
            'name': 'special',
            'fee': 0,
            'message': '',
          },
        ],
        'totalFees': 3600,
        'message': '',
        'title': 'Delivery Charge',
        'amount': '3600',
        'icon': '',
      },
      'availability': {
        'opened': true,
        'nextOpenMessage': '',
        'nextCloseMessage': '',
      },
      'longDistanceEnabled': 0,
      'rainMode': 'NONE',
      'thirdPartyAddress': false,
      'thirdPartyVendor': '',
      'adTrackingID': '',
      'badges': {
        'imageBased': [],
        'textBased': [],
        'textExtendedBadges': [],
      },
      'lastMileTravelString': '1.1 kms',
      'hasSurge': false,
      'sla': {
        'restaurantId': '11670',
        'deliveryTime': 30,
        'minDeliveryTime': 30,
        'maxDeliveryTime': 30,
        'lastMileTravel': 1.100000023841858,
        'lastMileDistance': 0,
        'serviceability': 'SERVICEABLE',
        'rainMode': 'NONE',
        'longDistance': 'NOT_LONG_DISTANCE',
        'preferentialService': false,
        'iconType': 'EMPTY',
      },
      'promoted': false,
      'avgRating': '3.7',
      'totalRatings': 10000,
      'new': false,
    },
    'subtype': 'basic',
  },
];
const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  slaString,
}) => {
  return (
    <div className='card'>
      <img
        className='card-img'
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/' +
          cloudinaryImageId
        }
        alt='food-img'
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(' ,')}</h3>
      <h4>{slaString}</h4>
    </div>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
