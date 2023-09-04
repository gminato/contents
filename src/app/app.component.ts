import { Component } from '@angular/core';

export interface AppMetadata {
  developerAddress?: string;
  lastupdationtime: number;
  website?: string;
  thumbnail: string;
  screenshotUrls?: string[];
  rating?: number;
  description?: string;
  developerEmail?: string;
  shortDescription?: string;
  version?: string;
  fileLink?: string;
  createdby: string;
  lastupdatedby: string;
  appBanner?: string;
  packageName?: string;
  creationtime?: number;
  developerName?: string;
}

export interface App {
  metadata: AppMetadata;
  name: string;
  id: string;
  type: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['appName', 'appType', 'uploadedBy', 'status'];
  chosenContent?: string;
  appJson: App[] = [
    {
      metadata: {
        developerAddress: 'Ravala pst 6-404A \n Harju county, Estonia',
        lastupdationtime: 1693567657000,
        website: 'https://yollacalls.com',
        thumbnail:
          'https://lh3.googleusercontent.com/uFq4JzUYOaf6wBCv3KagXO1nCPL1-EtG8v3uLyxuDqT7Sc2sV6-0ouPKmklogC48BOH9rK0mupQ_vXvT4Hdg-rd1Ao5daz0E2Qgi',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/lv4C3c5z14EMcmb8SVqIJJ8xHzKm66Aj1kWw7qPVCw0-y-U6pdVcrMWx1el9ZVyh7ROaA2JrxW1vCOMyHCI5zFMQpMOMpAxFSJY',
          'https://lh3.googleusercontent.com/rQviHrtYYJWe7PwCEbEZFNQsBcCAfTW2rj5Iml6l3oMy8Zd02YW_4NEVTRt1TLGyXg2TzGJsD7WtFo-jCmZS5RTRrWBHK7aHPIA',
          'https://lh3.googleusercontent.com/xYUSXs3FHlsPCZqax15SEmjwVgnQDT5ZTTgVzHkRk-Woi1HLbFcOw6A-h9le26ZLln46aNo8s3axKNocWNUukvLubfLHB-Z8vfao',
          'https://lh3.googleusercontent.com/cGEA2BguY5sJjpgHyom4zkCxsWWfUe6U8KltTIfglQmCJM26QBxW3hRMO3L9LTSvdhh1EZXj9qhF38JIuKOQx4M48aNi3OZ2RUZ3',
          'https://lh3.googleusercontent.com/Tbv_LhhXw4LbnT7lB4ZnyI-S6YoCRmo2-Dg-xHqrVVj226t9gF8LHUeBG59LcjRo2zKpa5FNJyhAAew8YaeAIM7W1buKYK_3hK2ucA',
          'https://lh3.googleusercontent.com/LeBo158ADImKv-75ADHR8oglz7GsXSiuUaY9U6aIJBQwUV5YTrLVJE75PTPK20IR886bM5B2Hf2e0wIpMrjF0D2qRXKUcKxS-TBY',
          'https://lh3.googleusercontent.com/olC_4Z0qubzqWtDM4Sh-xchDMlZjFz5ZF3nXvnB2uzWjYZQRbuKwIQXBEJQoVjVN8zDlFnpxzrSbmz-fI5Pt4p-KByriWe02iJsJ',
          'https://lh3.googleusercontent.com/IXQ_Z0y_CKwipdF2VwpvpqsLN8hlbGWqq9kFCq40YD23OrX3-aRY-VvXN-JtlfVnJV74OcZTL45t8NfBS67uQBvMnfohNS6lEWw',
        ],
        rating: 3.9761905670166016,
        description:
          "Yolla helps people call abroad since 2015. 9/10 users are satisfied with Yolla, 7/10 give us 5 stars.\n\nYolla makes international calling affordable and helps people keep in touch with family. We offer HD quality international phone calls at low rates. Call any country to both landline & mobile and cut roaming fees. Invite friends to get credits for free international calls. Enjoy features like international texting, mobile top-ups and more!\n\n<b>WHY CHOOSE YOLLA?</b>\n \n☆ CHEAP INTERNATIONAL CALLS\nCall abroad for less u2013 our rates start from $0.004/min. Unlike other calling apps, we have no hidden fees u2013 only transparent per-minute pricing. You see the final cost on the screen. Your balance never expires. International calling has never been cheaper!\n \n☆ PREMIUM QUALITY CALLS\nWe offer the best call quality. Enjoy clear audio and stable connection. Call India, Nigeria, Ethiopia or any country u2013 you will feel no difference between international calling with Yolla and making a local call.\n \n☆ INTERNATIONAL TEXTING\nNo time to call abroad and need to drop a message ASAP? We have you covered. You can text now to almost any mobile in the world. Send international text to 150+ countries via Yolla.\n \n☆ FREE INTERNATIONAL CALLS\nInvite friends to get free calls. Once your friend makes first payment, you both get extra $3. You can join our testing program to get more international calls for free. We also run promotions that give you extra bonuses for free calls.\n \n☆ DISPLAY YOUR NUMBER\nBe yourself and keep your number. We show it to the people you call. Family and friends will know it is you.\n \n☆ SAVE MONEY\nNeed to call abroad or call home from another country? Connect to any hotspot and avoid roaming fees. Save up to 90% on international calls vs. traditional carriers. Be it landline or mobile number you want to dial, we will offer you the cheapest rates possible. Our popular countries to call: India, Nigeria, Ethiopia, Kenya, USA, UK, Sudan and many more!\n \n☆ EASY MOBILE RECHARGE\nTop up any mobile number in 148 countries with low fees. With Yolla, you will have no problem sending airtime to anyone in the world.\n \n☆ FREE APP-TO-APP CALLS\nJust like in any other internet calling service, all calls between Yolla users are free. And on top of all this, you also get video calls!\n \n☆ STAY IN TOUCH WITH FAMILY\nWith Yolla you can make calls to your family and friends back home. Talk to family wherever you are. They don't even need Yolla, internet or even a smartphone. You are just one phone call away from your loved ones.\n\n☆ HELP YOUR FRIENDS\nInternational calling should be accessible to everyone. If your family or friends canu2019t top up their Yolla accounts, you can recharge their balance. Just purchase and send them Yolla credits.\n\n☆ SECURE VPN\nMake browsing secure and anonymous. Access banks, video streaming sites and more from a virtual location with secure encryption and a zero-log policy.\n\n<h2><b>EASY TO USE:</b></h2>\n1. Install Yolla and sign up with phone number\n2. Add credits\n3. Type a number you'd like to call or select a person from your contacts\n4. Call\n\n<b>EXTRA FEATURES</b>\n✓ Use your contact list\n✓ Referral program to earn credits for free international calls\n✓ One account & number for all devices\n✓ Buy credits via app or from our site\n✓ Optional auto top-ups, so you never run out of credit\n✓ 24/7 support always ready to help you with internet calling\n✓ Make a call via Wi-Fi to avoid roaming fees.\n✓ Free calls between Yolla users\n\nWe'd love to hear your opinion:\n<b>Rate our calling app and let us know if you like it!</b>\n\nGet Yolla today and start talking more for less! Drop the doubt and start enjoying international calling! <b>All you need is the Internet connection</b> u2013 WiFi, 4G, LTE, or 3G. <b>Your friends and partners will see no difference but you will.</b>\n \nSubscribe to our socials:\nhttps://www.facebook.com/yollacalls\nhttps://www.instagram.com/Yollacalls/\n\nAny questions or suggestions? Please contact us at hi@yollacalls.com\n\nRecent changes:\nWe fixed some minor bugs to improve the overall stability of the app.\nSmall issues with calls from Yolla to Yolla have also been optimized.\n\nSome of you may have experienced issues when trying to connect Bluetooth devices during calls. Our team has fixed this error on all models.\n\nHappy calling!",
        developerEmail: 'hi@yollacalls.com',
        shortDescription:
          'International calling app. Save on international calls. Call mobile & landline.',
        version: '4.32',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/001.com.yollacalls.apk',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/el4d3ML75_a4fFMImGYi9II0TSOjsZm3isNne-3hiItMysIRjOj_3oprOTSS1Lgh-m0W4ww3VIY4GDRg1czqOVI9Zd86aUn6c23o9Q',
        packageName: 'com.yollacalls',
        creationtime: 1693567657000,
        developerName: 'Yolla Calls International',
      },
      name: 'Yolla: International Calling',
      id: '001',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: '605 Third Avenue\n14th Floor\nNew York, NY 10158',
        lastupdationtime: 1693568047000,
        website: 'https://vix.com/es/canales',
        thumbnail:
          'https://lh3.googleusercontent.com/rTHsWka3TZDlVeVhUF2a3hKzJ2XlQlFObSDWdaMuxS5o6cV5qZOYY68F_DqX_mPSLd-h1wFJonoXgPSqFGOmK7VI-HUgO1YfaPbh',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/040b8dJe3In5445-4_EHrSO7TBsVkpPLfbdpgJ2eeJkJAm80k4P5uDAyZFZ9z8iBNWJ343BqNghbOqviVUVlvzuH1vFp4l2VwKjd5g',
          'https://lh3.googleusercontent.com/HnWu4AXJFtV-1TMXeDY0yM3BHgTW2fvZQ2q6dBP5ZUK97PRrLJolBSBT9Zt4IjRRg2FmQjZG3Fb4iA_28FZE6KYlimgsl_9FbFtgVQ',
          'https://lh3.googleusercontent.com/5kyKeOjtvGerdCOz2GPIY1auoKz2JgEa7Gspw-zBHkgIxgruRGEgUvD8wvL4P80mTxkEnfPCBh1seqK0wP_EZRruWzkcJMr93og',
          'https://lh3.googleusercontent.com/SHz-LHHO79jyLSMEu5r5rDCXkxgNGyI0oLB8w0lmwGz4Vx3bWyy2fNugq9_J97w22VYQZSNjTB4GhCzgFiF1sHfpT9-tfxDRU6zLqw',
          'https://lh3.googleusercontent.com/kWWUzNU3T4cUehNxjAeZIItf_Ly0AesOovHmEpDGSir7YqWBoC3mcJDy_0-sb56pp1jxBkq3gTHEBLB_zZvNWrODd1y3bksmDG_l',
          'https://lh3.googleusercontent.com/cjcnIKswgp61hbG5IVXqnrk4G9RDJJKXrH9fSIDMMWG5jGI-6-Laix3WNofbd10EH6VuUadzoxJtUncFtRzTJMfvpoo00Y2Kiay8',
          'https://lh3.googleusercontent.com/b0D06MljswabxCZUWReITCmQlwawI71Q6b5-QQ_ZGHyRhv8kI-GlEtYzIGs7TRtU1o4M4pVdYcMIlloWXdTvE97q7Di1tt8C96evrA',
        ],
        rating: 4.012351989746094,
        description:
          'Disfruta de ViX, el streaming en español más grande del mundo, siempre GRATIS. Tenemos para ti más de 100  canales de TV en vivo y on-demand, con novelas, películas, comedias, series y noticias 24 horas.\n\n\n¡Descarga ya! Abre la App y comienza a disfrutar totalmente GRATIS de nuestro servicio de streaming de manera inmediata en todos tus dispositivos favoritos. Tienes la opción de ver ViX en cualquier lugar y cuando quieras.\n \nViX tiene lo mejor en series, cine de Hollywood, divertidas comedias y deportes en vivo. En ViX nunca tendrás tiempo para aburrirte. ¡Es GRATUITO!\n \nEntretenimiento sin límites, donde sea y cuando sea.\n \n●  \tDisfruta de tus novelas favoritas desde el principio con episodios completos\n●  \tTus comedias clásicas que te hacen reír a carcajadas\n●  \tDramas, acción, reality TV y documentales\n●  \tPelículas Gratis  \n●  \tLo mejor del fútbol en vivo\n●  \tNoticias las 24 horas del día\n●  \tY tele para los pequeños de la familia\n●  \tNo necesitas tarjeta de crédito o suscripción\n●  \t100% legal\n●  \tTotalmente GRATIS, ¡no gastarás ni un centavo!\n \n\nY para acceder a aún más contenido, suscríbete para ver mucho más de lo que más te gusta.\n\n \n ●  Las mejores series originales producidas en tu idioma\n●  Estrenos de películas en exclusiva todas las semanas\n●  Los deportes en vivo que quieres ver como la Liga MX y los clásicos más aclamados de Latinoamérica\n●  Cancela cuando quieras\n\n*Algunos contenidos sólo aparecerán en ciertas regiones o países.\n\nRecent changes:\nDisfruta de la mejor experiencia de streaming con nuestra última actualización de ViX para tu dispositivo favorito. Esta nueva versión incluye:\nEstabilidad general y corrección de errores\n¡Esté atento a más actualizaciones que llegarán pronto!',
        developerEmail: 'support@vix.com',
        shortDescription:
          'ViX, tu servicio de streaming, te ofrece: series, cine, deportes y noticias 24/7',
        version: '4.15.0_mobile',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/002.com.univision.prendetv.apk',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/u7nOGkyd7rAp-kv2RhNpVqh62OHALLiaiyQVvgzHWLelpGwdgmXXllUJqAebNSfaiA8ax-5V8JlodV5g5IlNw2dcNEEuAaHbzg4',
        packageName: 'com.univision.prendetv',
        creationtime: 1693568047000,
        developerName: 'TelevisaUnivision Interactive, Inc.',
      },
      name: 'ViX: TV, Deportes y Noticias',
      id: '002',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: 'DMC3,\nDubai Media City,\nDubai, UAE',
        lastupdationtime: 1693567657000,
        website: 'http://www.shahid.net',
        thumbnail:
          'https://lh3.googleusercontent.com/mzZBiWIMWfCB5-PsvvyfR7KXUrpNV8QmptcdxqDNF8Db9ySvtbf_c6jIa_m9vQMRMq_bxwqXoKl8kMtlTUOrMsNImcbBL3l3uwaU',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/npoQgKA_Utc3nfTxy7OIbwkE5QXbJWmhZJC_aAE7L6d9upGEKgz0JpeSqWfq_T-BnwKbbrVWJ2rdvACGrngnD_E0-GftHmRo9wU',
          'https://lh3.googleusercontent.com/zdo7L2HqibEZBamdRV73CSfI88d7vG6vZOpRdwVBHQ4VAJ5lep4vnoe8Gg65ATo4j9efzB9qc5_uy3OYsr5OdnnL3d3NlShCmLA45w',
          'https://lh3.googleusercontent.com/cGklaJCRFwInu0kAgrX4ApEimhw5nSs8AIhMta7wZu0dlZaKGlUootx9-3NdYnwV3f0pbZaHx2GDHrU2Oc3to8wAnvkfcByR9RAbjA',
          'https://lh3.googleusercontent.com/0Q7lJGW6KvQ2q9madE0Gh7FaYQaguQZER5Nhwvtz92ayR3rySqI4NZpjTKv8WdaOMVxpFhDwRUSZFQjGwSU8LOfx84ugxriFhbbvYQ',
          'https://lh3.googleusercontent.com/nIR-kdStzJhWJu4vXi0H27DyZQGmUv4_0EVv_L4dmdM-q0CHhcjrNLgb-AESgmUSk1ARCfjSg6UovdYFXxhP81p-IF-Mv00JEac',
          'https://lh3.googleusercontent.com/t1pLgqnnqY8yRXZaLmuXIfWf1irbsfX1kxux8tV3d5m4RdAqEH7QjEUef6OFn56wzRm4Jl4Ieh5Q7CrucxuKQQFqh99J8nmDIbw',
          'https://lh3.googleusercontent.com/hBh8InoGdT1RmaPKKXFyNWGTOwq9kXdiP3W1XWfbcGEKo5T4xJTGJ8usfFQlNz2xYHBrRlR4UXYImwq5QTE86fXZMcPVvlUNQqA5',
          'https://lh3.googleusercontent.com/NsLoGF9k5hf38beWAmtTct0QJzxFS8uSqSB0yv72UJXY2PT9yUR8tcYdfytkutqOvaMY2pu085V7GwV1KI1JjcVEYYSW-LkptDzm1A',
        ],
        rating: 3.392909288406372,
        description:
          "Welcome to Shahid, your premium platform for a wide variety of the best Arabic Originals, exclusive series & movie premieres, live TV, Sports and more.\n\nDiscover something new every week\nSubscribe to any of Shahidu2019s packages and enjoy unlimited access to a world of entertainment for you and your family:\n\nShahid Originals\nEnjoy the worldu2019s best Arabic original productions exclusively\n\nLive sports in HD\nWatch the Roshn Saudi League matches and other sports in HD\n\nLive Events\nEnjoy events like Riyadh Season, Jeddah Season, upcoming live concerts and plays\n\nAd-free\nNon-stop entertainment with no ad-interruptions\n\nLive TV\nAll your favorite channels live in Full HD\n\nSeries and movie premieres\nStay one step ahead and watch new shows and movies first\n\nExclusive previews\nWatch amazing series & movies ahead of TV and cinemas\n\nSafe kids content\nExclusive content for your kids to enjoy on secure and dedicated profiles\n\nMultiple profiles\nAssign each family member a unique profile\n\nDownload and watch offline\nDownload your favorite content and watch it on the go\n\nUp to 20 devices\nLog into the same account on all your devices and watch different shows simultaneously on up to 3 devices\n\nWorldwide access\nKeep watching content regardless of where you are in the world\n\nPrivacy Policy https://shahid.mbc.net/en/privacy-policy\nTerms of use https://shahid.mbc.net/ar/terms-and-conditions\n\nRecent changes:\nHalfway through the year and Shahid is rocking it! We're totally crushing our 2023 resolutions. We hope you're killing it too!\nMajor Achievements:\n1. Multiple player enhancements including Live TV and EPG\n2. Search improvements\n3. Introducing new mechanisms to spotlight our free collection\n4. More perks are now available across the packages",
        developerEmail: 'customersupport@shahid.net',
        shortDescription:
          'Watch new movies & exclusive series with Shahid, the leading Arabic VOD platform',
        version: '7.46.0',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/003.net.mbc.shahid.apk',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/odPXglBzpGbZEJ6VDLFHqX1McbTETQrY0BRnAD9VrTz7NExY22Vd0byD2N19eA35rmhX6NVnoUGA_ugpncfW3Lc',
        packageName: 'net.mbc.shahid',
        creationtime: 1693567657000,
        developerName: 'MBC Group',
      },
      name: 'ﺷﺎﻫﺪ - Shahid',
      id: '003',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          'UAE, Dubai, Trade Center Second, THE OFFICES 4, office No. 09-103',
        lastupdationtime: 1693567657000,
        website: 'https://meteum.ai/',
        thumbnail:
          'https://lh3.googleusercontent.com/Ob9mdUqRoWp1ZB5quwNyDcRLnx9EO7Y1KCQrJcJG4EzaiNEj62fkN7wdwVZKndFelD7uxsj32-0akcoBhLXbcTG7EE4gRM5Eq7wT',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/iZe_SlSsCdVzmAReO9VobFYoLVajax-lXhp-5FubirA2Of950zb4fmqq3XsRNE_Z_oFKmQ5BHizL77Jo5zIQ5pjg9IHQ0K28p2l2',
          'https://lh3.googleusercontent.com/Mm94JfyJnLlOMA03oe5frZF_CF2h_3qd3O4fYxvK-Nmn5bnKcy5wnK6Tn1DxTGhS6XHfqqnPPvYIwXfLS7SoXRGhPj540iBGG2E',
          'https://lh3.googleusercontent.com/2Jvm5r3dBGnn4SkiJgB4ir14QORzbeJe16Bi-8A2ddDdKSLHunFJsy3lm4bvMP6_cZ9u5WRKCSnjT65Sjm2OzvMThhHMT5ya5SXUDA',
          'https://lh3.googleusercontent.com/I3QpRYFi7vnrWmeh2ceXMzqULA_8pCUM_I3REMeVVjU4qs3ZChvFGmgigMd3kBnFuFjZP5wYatt2CI-OfTq9eVGmKwKV2qbb3NAByQ',
          'https://lh3.googleusercontent.com/XO_0mOfcVuJJIORfE4ZtbhWmp7auwmWzFmlMH_laEbAoCw8bfxIr9g8_LR-RFQmZGk5ZaEbmiN7E91WMGIl5x7mdp_KT2cMideYViQ',
          'https://lh3.googleusercontent.com/4JPtHn4sHMQh_3jhUo21NVavsVVhFGsrKsdOuZLrt66Skf14Nv3IDHdnEkOs251I4QJ_IFyMCUseWAewyqr8w7Gevkwwu8HCOdo0',
        ],
        rating: 4.171428680419922,
        description:
          'Meteum provides accurate hyperlocal weather forecasts, alerts and interactive weather radar information in real time. \n\nPowered by the AI technology, Meteum integrates surface observations provided by\nthousands of automated weather stations around the world, alongside data from radars and satellites. It also relies on current weather reports from the service users, which bring the quality of live weather forecasts to a new level.\n\n<b>Meteum users can:</b>\n\nu2014\tView weather forecast for today, tomorrow or the whole week ahead u2013 for a city, city district, metro station area, or even specific street address\nu2014\t Watch the rain or snow patterns on a weather radar map in real time and track their trajectories in the next ten, thirty or ninety minutes\nu2014\tChoose favorite locations for tracking the local weather and easily switch between them \nu2014\tReceive alerts about sudden weather changes, such as cold snaps, thaws, or rain showers\nu2014\tPlace a customizable weather widget on notification bar to always stay in-the-know about the weather and plan ahead \nu2014\tQuickly verify current weather reports submitted by other Meteum users through a clear and simple user interface\n\nRecent changes:\nGet ahead of the weather with our new monthly forecast feature! 🌦📆 Plan and prepare with ease for the entire month!',
        developerEmail: 'support@meteum.ai',
        shortDescription:
          'Hyperlocal weather forecast and weather radar powered by artificial intelligence',
        version: '23.7.4',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/004.ai.meteum.apk',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/Kcx61sCOfCl6PLRwbZ0uCe84g9YJtshZ9LVmTUsh9pQ1LVD43bppFiuxjiIAoLj7Dn8AIl-RoQw59IeBGDYhTp30HE6MYqIE1i71',
        packageName: 'ai.meteum',
        creationtime: 1693567657000,
        developerName: 'Direct Cursus Computer Systems Trading LLC',
      },
      name: 'Weather by Meteum',
      id: '004',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          'Tinder\n8833 W. Sunset Blvd.\nWest Hollywood, CA 90069',
        lastupdationtime: 1693567657000,
        website: 'https://tinder.com',
        thumbnail:
          'https://lh3.googleusercontent.com/FIGb5o3xY87RIvu_af4xIq0uM78d7_WV4geRld7s7LvM7aPeDOpReNIpaSWfdq2Lxa6BSKKHQ-6oaScbPwx6ALI3rnrxN9JS-b4Rgw',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/ofWPP8ka9NSSipBwak-GuNmlD7_IHer_KWoWlVwHRgkvqT4Rruv5X3ZMZAWkaFnWWV2HyYTp4fVXAbWIXA6EW7FLC6Igydk59Q',
          'https://lh3.googleusercontent.com/-uYK9yQQV_l8Aqpj0CWDn0ZCnQx7HrCeho39V9ONfX49BmDHMSkU_SO6i7TjKvF9ARFiAP7fjH6hmK1PEOq4lmb8JHlqrxE5B4Gyow',
          'https://lh3.googleusercontent.com/EZKxJEpBPecXxT8JJaWbbnIcUIT2r9kvew19FtRE7FvmPiXz-YV9CU0VSEg7R-gj-Nc74hm1BdpGC3M-iVlJGwwoucaYUu5RdAI',
          'https://lh3.googleusercontent.com/01USDiFJQqHRdcsg1d1E16yDeUBRpsqnIIm-kQNEwTgiqd9xh3IlkvQdrL6d_dINuLWhqNSixoe8OM4tEntHLhhhMBYq07dOBOU',
          'https://lh3.googleusercontent.com/c0jJSRMEeIiaOLm5DeTGBmydnsoDdfGEmES4bK9nGmhTnpQK2-jSpMjlhP21JwCz1ZEHpcsDqEUgutEC8pYwGg5pOFqsUxLF7hjZbg',
          'https://lh3.googleusercontent.com/aTE-hAKp6JozaJYqjrujfRnT6_bRvgelFQXYrx3LZQkF7WNYJt2cbQ8UeWofLp8DHBgyRj4oufn3p843gNS_9j30iW6uUT8E4_E',
          'https://lh3.googleusercontent.com/vy5hr9ACmNXAl8SAo-FOapuYDqpHzc4pgiA9j6Ri9ZVwS43TJi9ZCWbIZhJeb7PpnYKDIl_ufuzHotbmFBU2bW_xAKV035EH-1yQ2w',
          'https://lh3.googleusercontent.com/-hdVchSx-P67PuLSwwf9csUMNoT_Fpm0XfOhgL4W4fWCGA9ar65Vg-9d8F0GzBiV5nd1WZ9cXqkndPii1xpPIxbbeOXiJPxHi-Q',
        ],
        rating: 3.6920199394226074,
        description:
          "With 70+ billion matches to date, <b>Tinder® is the top free dating app,</b>  and the best place to meet new people. Are you looking for true love? An open relationship? Are you looking to get out there and find a date, or do you just want to make friends and chat? With Tinder, you can meet local people everywhere and get the best out of your dating experience:\nWhether you're straight, gay, bisexual, or anything in between, Tinder allows you to be who you are and find who you want.\nShare your interests and learn more about your matches to get the conversation started, and get the sparks flying.\n<b>Photo Verified Profiles:</b>  Because the only surprises we want are flowers on the first date\n<b>Video chat:</b> Test your online dating chemistry and meet new people from home!\nTraveling somewhere? Get to know the locals from around the world. Dating in New York, meeting new friends in Miami, or going on a date in London: Wherever you go, weu2019ll be there. \n\nSome people call us their u201cmost dependable dating appu201d, some people call us <b>u201dthe worldu2019s most popular free dating siteu201d</b>, but you can just call us when you want to meet up with people in your area.\n<b>Match, Chat, and Date. Thatu2019s our mantra.</b>\n Itu2019s easy and fun to meet new people on Tinder®. Make your profile stand out with your best pics and a little something about you to increase your match-making potential.  Use the Swipe Right™ feature to Like someone, use the Swipe Left™  feature to Nope. And no pressure: With our double opt-in feature, the interest has to be mutual in order to be a match. How many dating apps can say that?\n\nWhile youu2019re here u2014 make a toast to the Gold life and enjoy some of Tinderu2019s premium features with our Tinder Gold™  subscription\n♥ Likes You u2014 see all your fans, saving you precious time \n♥ Unlimited Likes for you to catch feelings for as many new people as you want\n♥ Rewind u2014  undo your last Like or Nope\n♥Passport u2014  find people online outside your zip code\n♥ Monthly Boost u2014   put your profile to the top for thirty minutes to get more attention\n♥ 5 Super Likes available per week\nLooking for access to all of Tinderu2019s premium features? Join <b>Tinder Platinum™</b> to also get your Likes prioritized with potential matches, to be able to message before matching, and more.\n\nThereu2019s a plus side for those not ready to commit to a relationship with <b>Gold</b> or Platinum. With Tinder Plus®, youu2019ll unlock features including Unlimited Likes, Unlimited Rewinds, and Passport.\n\nSo what are you waiting for? <b>Download the best free dating app today!</b> It doesnu2019t matter if youu2019re looking to make friends, meet new people or find your perfect match, Tinder is a place where everyone can find exactly what theyu2019re looking for. u2014 and itu2019s about time you showed up.\n\n-----------------------------------\n\nIf you choose to purchase Tinder Plus®, Tinder Gold™, or Tinder Platinum™ payment will be charged to your Google Play account, and your account will be charged for renewal within 24-hours prior to the end of the current period. Auto-renewal may be turned off at any time by going to your settings in the Play Store after purchase. No cancellation of the current subscription is allowed during the active subscription period. If you donu2019t choose to purchase Tinder Plus®, Tinder Gold™, or Tinder Platinum™, you can simply continue using Tinder for free.\n\nAll photos are of models and used for illustrative purposes only.\n\nPrivacy: https://www.gotinder.com/privacy\nTerms: https://www.gotinder.com/terms\n\nRecent changes:\nBug fixes and improvements",
        developerEmail: 'help@gotinder.com',
        shortDescription:
          'Dating your way! Match, chat, and make new friends for dates or find friends',
        version: '14.16.0',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/005.com.tinder.apk',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/yU0IlZ2wps-jLoB9ROhOFsmD7dUzOqjGTtWjdRNkUzXCzj7ZUz-UGtjm7GKhJH0Y9NtIdygd9-8iqYJqN8W18AHU',
        packageName: 'com.tinder',
        creationtime: 1693567657000,
        developerName: 'Tinder',
      },
      name: 'Tinder Dating app. Meet People',
      id: '005',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          '110 Kippax Street,\nSurry Hills,\nSydney,\nNSW 2010,\nAustralia',
        lastupdationtime: 1693567657000,
        website: 'https://www.canva.com/',
        thumbnail:
          'https://lh3.googleusercontent.com/yi3c8NtCVUqGZAtvtij0JMEeFjxWhAFo77A_pOn2uFeAC2l6zqOq8eS_IMzE60_1_TX-N4jNwhHboOgquC49Q3AekcoFSFls3rfB',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/OM8VpS568rFCqErCg7Z1ytdIYBL_AePMCWrt80kMIbr_Pjxkq3blX-cMbfdqydt0pzHsYeLG_483YOO2sz9tAn7Un09xfYpbF1RA',
          'https://lh3.googleusercontent.com/D2-BrL9XE07-TqBplxwx5xv_dO5Fuw3u8mZq1P9dtEMSkAc1KeqqoiwSg4sK4K-K8lvMi02_wnvbjv8REaCDQkd9hcIV6RfXu-W0WQ',
          'https://lh3.googleusercontent.com/gzg86-niHN_z2BUYO0o_PsFGXL51VAx8m93_sEEt3ciP9spwXirNR0P83MYGpWcmaln9aThBx6tOdrUsW8UcViaP6MvRjFqVYQEb',
          'https://lh3.googleusercontent.com/xGjIspv795QDNGqwy_ehgI3GDY7frUHtGQs5eH-7MN9DGQi6vT6XSFJtOirbUuDNvRfz8LIjMplsYTXsYniVU_RQ8T3I1cJ9Wf6HTw',
          'https://lh3.googleusercontent.com/8LIBthflDZZa8UMVTNgAajQRCpaAYpfR0Wwsnm33dSfHub1L3_4Yf5xTYjBS1vb4pnHg46xnwYpy76oalvtftpIYJtHjn5U1xDM',
          'https://lh3.googleusercontent.com/wtEcOotOoiMB1Rdh9zNnFrp2samIRXd1jwV4Xv8ajzTWYSRPfwBTrxLgjXyjDbU3TAlXfCDVmu0m55c3sW7FkOqIg_UAW9WHkn8g3w',
          'https://lh3.googleusercontent.com/gUKSBfRVrMReiiNuMCuCsmTsklMFm0VPTeJj5XWuEtvK7nX6Ac9LrvieI9mOdFcOn0bgFeuc_NmEfLeLlBNxDFB2dBAeGwwVnaU',
        ],
        rating: 4.803033351898193,
        description:
          '<b>Canva is your free photo editor and video editor in one graphic design app! Create stunning social media posts, videos, cards, flyers, photo collages & more. Stand out with one-tap animations and fun music for Insta stories and video collages. </b>\n\nNo design experience or expertise? No problem! From photo editor to collage maker, to logo maker u2013 we made Canva really simple & easy for anyone in the world to design. \n\n<b>THOUSANDS OF TEMPLATES u2013 endless creative possibilities</b>\nu2022 Start inspired with thousands of customizable templates\nu2022 Playful Facebook posts, Insta layouts, Instagram post maker, IG Story, & mood boards\nu2022 Professionally-designed invitations, flyers, gift certificates, etc. to boost your business or event\nu2022 Showcase your product with our logo maker\nu2022 Visualize data with sleek presentation templates and slideshow maker\n\n<b>PHOTO EDITOR u2013 free to use, no ads, no watermarks</b>\nu2022 Effortless picture apps to crop, flip, & edit photos\nu2022 Adjust brightness, contrast, saturation, tint, blur, etc.\nu2022 Auto Focus for background blur & sharpen photo subject \nu2022 Apply your style with aesthetic filters & effects (Retro, Pixelate, Liquify, etc.)\nu2022 Top it off with text on photos and loads of stickers\nu2022 Fun photo grid & photo collage maker \nu2022 Design easily on a small screen without disruption from ads\n\n<b>VIDEO EDITOR u2013 make amazing videos in just a few taps</b>\nu2022 Produce professional videos right on your phone\nu2022 Trim, cut, & split video layout and audio tracks\nu2022 Crop, resize, and flip videos & images to any dimensions\nu2022 Make static images move with one-tap animations & page transitions\nu2022 Overlay multiple audio tracks of music, sound effects, & voiceovers\nu2022 Use the video editor as a video collage maker & slideshow maker too!\n\n<b>SOCIAL MEDIA u2013 hit it big with on-trend content</b>\nu2022 Discover thousands of templates for Instagram, TikTok, Facebook, Twitter, YouTube, Snapchat, LinkedIn etc.\nu2022 Queue your planned posts on Instagram with Scheduler [Canva Pro]\nu2022 Play with our photo editor for thumb-stopping Instagram layouts\nu2022 Use as a banner maker for eye-catching thumbnails & ads\nu2022 Easy collage maker & video editor to create photo grids, collages\n\n<b>HUGE STOCK LIBRARY u2013 over 2M+ assets for you</b>\nu2022 Complete package: all the elements you need are here\nu2022 2M+ royalty-free images\nu2022 Thousands of watermark-free stock videos\nu2022 25K+ pre-licensed audio & music tracks\nu2022 Add text on photos with 500+ fonts & effects (curved, neon, and more)\nu2022 Graphic design elements - illustrations, stickers, photo frames, etc.\nu2022 Beautifully animated charts, graphs, & tables from any data\n\n<b>SMART MOCKUPS u2013 see your designs on a shirt or poster </b>\nu2022 Look professional by visualizing your designs on products \nu2022 High-res mockups for phones, laptops, posters & other displays\nu2022 Order printed flyers, mugs, and apparel for gifts or business\n\n<b>REAL-TIME COLLABORATION u2013 with anyone across any device</b>\nu2022 Edit team projects & presentations anytime, anywhere\nu2022 Start a design on mobile & finish on your desktop seamlessly\nu2022 Work with your team in real-time, leave comments & apply changes\n\n<b>CANVA PRO u2013 get more for a low monthly cost</b>\nu2022 Access premium templates, images, videos, audio & graphic design elements\nu2022 One-click Background Remover\nu2022 Magic Resize - Instantly resize your project to any photo & video layout\nu2022 Brand Kit - Stay on brand with consistent logos, fonts, & colors\nu2022 Scheduled publishing to Instagram, Facebook & more\n\n<b>DESIGN FOR EVERYONE </b>\nu2022 Personal - Layout designs for creative & professional pursuits like Instagram templates, resume, photo collages, etc.\nu2022 Entrepreneurs - Grow your business with our logo creator, video editor, poster maker, etc.\nu2022 Students & Teachers - Engage with beautiful presentations and worksheets\nu2022 Social Media Managers & Content Creators - Use the photo editor and collage maker for consistent visuals & mood boards for your brand\n\nRecent changes:\nHighlights from Canva Create, our second global event!\n\nu2022 Magic for the Visual Suite: NEW AI-powered tools to help you save time and maximize creativity. Try Magic Eraser & Magic Edit on your next photo, or use Beat Sync to hype up videos.\nu2022 Brand Hub: Centralized space for everything you and your team need to stay on-brand.\nu2022 Plus, the most-requested Design & Accessibility tools: Layers, Gradients, Translate, and much more.\n\nHappy designing!\nhttps://canva.com/help',
        developerEmail: 'android-app@canva.com',
        shortDescription:
          'Your background remover, photo editor & video editor',
        version: '2.229.0',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/006.com.canva.editor.apk',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/cOEDtFht2RqrJEIvit1A0PYmGjvMR3R7clhu25ZTwb5sDJpePeYIqS0jgIHvnaz1RB93HM1NS67p0DMoOpggmObv8BSDlEUp1Xyfqg',
        packageName: 'com.canva.editor',
        creationtime: 1693567657000,
        developerName: 'Canva',
      },
      name: 'Canva: Design, Photo & Video',
      id: '006',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: '',
        lastupdationtime: 1693567657000,
        website: 'http://www.ifood.com.br',
        thumbnail:
          'https://lh3.googleusercontent.com/NALy0ZB7V5FhtBkV_JzvOExuhOq_5sLB_UUJffjuNystpIL3Tu7xexpxUCVfNyaKGwb2iWiV7O6FQKFFYErFUrMkhdiiDHEjq7k',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/FVUgdzOUUaTjXF1YPZe-T52PdTe_9kt1p3a0lJMdY-Gg4tQm7JFtrSl_kgXwcElDoMnXXRxinBOQk_3ZIiRl-a8xGQFcDknnnNQ',
          'https://lh3.googleusercontent.com/nGoDmhNlKE06huYVXd0ytoEP2W32bFzJEvgTg-SMbnb3rzZbT3shnQGax9yHGzlXFJNARaJs-fZ37rc4eoPho2s4gf0aUuX2dZxs',
          'https://lh3.googleusercontent.com/z3cBd3GgQq3rpxlrUNaFbe49TxTvuHWKOU1aa4YPVRYP0A71maEi7aZll-BNL-dHAo8rv_0ofroXBBFqx-ig6cJHchDD5SsgmIGd',
          'https://lh3.googleusercontent.com/2mPqrjMXCnZhla1sfW3axTbTdDTJHdVCLTFhP8SgKCG8JeIJFuSOymhFchyBeYv7MhmZ4FjjpPqyjnX5nXkcAOd6eenxf3JlJKM-',
          'https://lh3.googleusercontent.com/8dVepscZ7PHN1XMZrIJhQrhrE67o01xgWU_4WvvPK5FTniCDehKdP1ePlMg7p_3ClISkrDVtcztknV_K6OrjVS6_czTgE0Pn_4A',
          'https://lh3.googleusercontent.com/9uaVkYqZfVJAbHu-sm78BcmC2UXaVlmMh8A3hFTIvwTCCI7g-dvaY7cjVHUATZzjsNNb5aUM-MEfYs-gDTe78r4DEvhvnBccYdXqZA',
          'https://lh3.googleusercontent.com/S1RBFy8Wdiv6ig2z50l5Mbr9a6WnsVrciZn1dD6GfynAFgVlj5RRPHE8DMjZIyasoe1rWuAkYftEC9DNSVwS79_Grydood7O_TzG',
          'https://lh3.googleusercontent.com/5lkbCt-Na3Ih4XQTDFPhD9FpdxcvkH6yHxTwse3ZyHUpKmPJLbrYNeWt7mtFjfHNNNNsqgBAkOEUnMKiP-M2X6ga0nCncIg03wYgPA',
        ],
        rating: 4.64669942855835,
        description:
          'Compre em mercados, restaurantes, farmácias e pet shop de forma fácil e rápida, tudo a um toque de você. As ofertas dos melhores mercados e restaurantes da sua cidade estão no IFood. Aqui você também encontra produtos para seu pet além de comprar itens de farmácia.\n\nPensou em pedir comida? Peça no IFood! Ir ao mercado, farmácia ou pet shop? Esquece, vai de IFood!\n\nDelivery de Restaurantes\nNão importa se você quer comer sushi, comida vegetariana, hambúrguer, pizza ou experimentar um restaurante novo. Use o iFood e peça em vários restaurantes no melhor app de delivery de comida para sua fome e seu bolso, sem precisar esperar uma Black Friday\n\nDelivery de Mercado\nBateu aquela vontade de preparar sua comida em casa ou faltou algum item da compra do mês? Você pode aproveitar nosso delivery de mercado para comprar os ingredientes que faltam e receber na sua casa!\n\nDelivery de Bebidas\nQue tal umas bebidas pra curtir com os amigos no fim de semana? Com o iFood você recebe as bebidas em casa e ainda economiza com cupons de desconto e ofertas.\n\nDelivery de Farmácia\nPrecisa comprar remédios, fraldas, produtos de higiene, produtos de beleza ou algum outro item de farmácia? É só pedir pelo iFood! Compre remédios, produtos de beleza e outros itens de farmácia com cupons de descontos e ofertas disponíveis nas farmácias mais perto de você.\n\nDelivery de Pet Shop\nAcabou a ração do seu pet? Precisa de areia pra sua gatinha? Não tem problema! Com o iFood você pode pedir ração, areia de gato, remédios veterinários e outros itens de pet shop com cupons de desconto e ofertas nos pet shops perto da sua casa.\n\nCupons e descontos pra vc\nCom o iFood você sempre tem opção de mercado, restaurante, farmácia e pet shop pra comprar com qualidade gastando pouco sempre, não só na Black Friday. Confira os vários cupons disponíveis pra você e aproveite os descontos em restaurantes, supermercados, farmácia e pet shop com entrega grátis pra pedir a qualquer hora do dia.\n\nMilhares de opções baratinhas\nUse nossa busca ou navegue pelas categorias e listas especiais pra encontrar as ofertas de comida nos melhores restaurantes, promoções de bebida, pizzaria, farmácia, pet shop ou compra de mercado. Depois, é só colocar na sacola e fechar seu pedido online. Em pouco tempo, o entregador estará na sua porta com tudo o que pediu do restaurante ou supermercado.\n\nAcompanhe seu pedido\nNo iFood você recebe sua entrega de comida e mercado rapidinho e ainda pode acompanhar as etapas de preparação do pedido e entrega pelo app. Aproveite para fazer suas compras de mercado, experimentar um restaurante novo ou agendar sua comida e receber em casa.\n\nBaixe o app de delivery que traz para pertinho de você os seus pratos favoritos, ou se decidir cozinhar, você encontra todos os ingredientes de sua receita em alguns poucos toques em supermercados. Com nosso delivery, você pede pratos dos melhores restaurantes, supermercados, farmácias e pet shop!\n\nTá esperando o que pra baixar nosso app de delivery de comida, mercado, farmácia e pet shop? Tenha os melhores supermercados e restaurantes, aquela pizzaria do bairro ou o mercado em que você sempre compra a apenas alguns cliques de distância. Aproveite para fazer seu pedido de comida e bebida e pedir sua entrega onde estiver. Tenha pizza, hambúrguer, comida vegetariana, sushi, fast food, comida italiana e muitos outros pratos do seu restaurante ou supermercado favorito na sua casa.\n\nVeja a lista completa das cidades onde tem entrega do iFood. Peça agora seu delivery de comida e mercado online: https://www.ifood.com.br/cidades-atendidas\n\nRecent changes:\nOlá, fã de comida boa e no precinho! Nesta versão não temos grandes novidades mas nossa equipe de chefs trabalhou pra fazer uma limpeza e garantir uma experiência ainda melhor pra você que ama pedir um iFood.',
        developerEmail: 'ifood@ifood.com.br',
        shortDescription:
          'Order food delivery, market, drinks, pharmacy and pet shop for little money',
        version: '9.221.0',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/007.br.com.brainweb.ifood.apk',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/O_i6x86XlvAKQiOn1EjCfIqIJD4hyLoKzqCebbsKCfqqumzx_-EzZZq3drqSZIkLPpJ-JEF6nG32OQPMNB-KDrBSHuR231wmnrJn',
        packageName: 'br.com.brainweb.ifood',
        creationtime: 1693567657000,
        developerName: 'iFood Delivery de Comida e Mercado',
      },
      name: 'iFood comida e mercado em casa',
      id: '007',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          'UNIT 17, 9/F, TOWER A, NEW MADARIN PLAZA, No. 14 SCIENCE MUSEUM RD, TST, KL',
        lastupdationtime: 1693575798000,
        website: 'https://m.mobilelegends.com/',
        thumbnail:
          'https://lh3.googleusercontent.com/2SBvrNfl_AzxwRkRS9aA5hteAXGXJt8duMg5x8gdRyG_gw2BDGT-MgjL4LJYJvd24flylHkmr-TQITeoPUu6xMkBGJUCv6R9RCE',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/MSmLarWVGkwlb9ygOITroi5JZx7cXxJrS0UQa4P0SZdNd796tqFad0vMlC1gtloskHlkJ2h27zx7GIcMnzG8Y_1hrT3u59uhBCZu2A',
          'https://lh3.googleusercontent.com/FfkkOR-2J9a59fjFiC-WxkxunS15cdnc5-Tlqw6ABAMWBGnIQFWhxNoT1kOvphM2ll4BhvmKufTo4dQuTzwMv1A78P1lPJ1hDm20',
          'https://lh3.googleusercontent.com/Uob3-gBaoMvYPR9B4i9GJwf2uK4kZEYGS1ZmkrrSbIRamOn7lHiLfs0RbHi-284d1tHkQOilX3astQ4eUCASglMm5ggZgd5Ht_8oZw',
          'https://lh3.googleusercontent.com/iXGgwWnG7vIUcAmdbGZmq51rVmElk9KtLkE9uLW6yW4dOE7q7hfjFHMmvE0VDGAEpdBtf6HkYLuEMrjFXoglyzd5eYapuocL4qfkIw',
          'https://lh3.googleusercontent.com/1kP0yiSL617UgRiXDFJnisw48HeMNTkNb4W9eYkvuMTZyrk16k4CDskLhWztuok8uE8yOnIgAKXTFBDrdPN97B_TH7jNEvgoYZ4',
          'https://lh3.googleusercontent.com/d4YhsZJD7-9nVmvBFu90CdDWIi-t5RQCRxi9QK_5V4FsefOd3NOZSe2VMW9_qUvjjGHrFNtwaD_zs9v3L1MoOBXX-V4LqYiN208s',
        ],
        rating: 4.199759483337402,
        description:
          'Join your friends in Mobile Legends: Bang Bang, the brand new 5v5 MOBA showdown, and fight against real players! Choose your favorite heroes and build the perfect team with your comrades-in-arms! 10-second matchmaking, 10-minute battles. Laning, jungling, pushing, and teamfighting, all the fun of PC MOBA and action games in the palm of your hand! Feed your eSports spirit!\n\nMobile Legends: Bang Bang, the fascinating MOBA game on mobile. Smash and outplay your enemies and achieve the final victory with your teammates!\n\nYour phone thirsts for battle!\n\n<b>Features:</b> \n\n<b>1. Classic MOBA Maps & 5v5 Battles</b> \nReal-time 5v5 battles against real players. 3 lanes, 4 jungle areas, 2 bosses, 18 defense towers, and endless fights, everything a classic MOBA has is here!\n\n<b>2. Win with Teamwork & Strategy</b> \nBlock damage, control the enemy, and heal teammates! Choose from Tanks, Mages, Marksmen, Assassins, Supports, etc. to anchor your team and be match MVP! New heroes are constantly being released!\n\n<b>3. Fair Fights, Carry Your Team to Victory</b> \nJust like classic MOBAs, there is no hero training or paying for stats. Skill and strategy are all you need to be able to win the intense competition on this fair and balanced platform. Play to Win, not Pay to Win.\n\n<b>4. Simple Controls, Easy to Master</b> \nWith a virtual joystick on the left and skill buttons on the right, 2 fingers are all you need to become a master! Autolock and target switching allow you to last hit to your heartu2019s content. Never miss! And a convenient tap-to-equip system allows you to buy equipment anywhere on the map so you can focus more on the thrill of battle!\n\n<b>5. 10 Second Matchmaking, 10 Minute Matches</b> \nMatchmaking only takes 10 seconds. And a match only takes 10 minutes. Gloss over the quiet early-game leveling up and jump right into the intense battles. Less boring waiting and repetitive farming, and more thrilling actions and fist-pumping victories. At any place, at any moment, just pick up your phone, fire up the game, and immerse yourself in the heart-pounding MOBA competition.\n\n<b>6. Smart Offline AI Assistance</b> \nA dropped connection could mean hanging your team out to dry in an intense match, but with Mobile Legends: Bang Bangu2019s powerful reconnection system, if you get dropped, you can be back in the battle in seconds. And while youu2019re offline, our AI system will take control of your character temporarily to avoid a 4-on-5 situation.\n\nPLEASE NOTE! Mobile Legends: Bang Bang is free to download and play, however some game items can also be purchased with real money. If you want to use this feature, please set up password protection for purchases in the settings of your Google Play Store app. Also, under our Terms of Service and Privacy Policy, you must be at least 12 years of age to play or download Mobile Legends: Bang Bang.\n\n<b>Contact Us</b> \nYou can get customer service assistance via the [Contact Us] button in the game to help you with any problems you may encounter while playing. You can also find us on the following platforms. We welcome all of your Mobile Legends: Bang Bang thoughts and suggestions:\n\n<b>Customer Service Email:</b> mobilelegendsgame@moonton.com\n<b>Instagram:</b> @mobilelegendsgame\n<b>YouTube:</b> https://www.youtube.com/c/MobileLegends5v5MOBA\n\nRecent changes:\n1. Battlefield Adjustments: New crit. equipment: Great Dragon Spear now available. The new EXP requirement adjustments will add more possibilities to the battle.\n2. "Beyond the Clouds" event series will begin soon: New exclusive skins will be available for a limited time. Themed Profile Namecard Background and Personal Profile Background are available from event for the first time.\n3. Magic Chess S13 will end at 00:00 on 8/11/2023. The S14 "Princes and Summoners" will soon begin.',
        developerEmail: 'mobilelegendsgame@moonton.com',
        shortDescription:
          'Play the 5v5 MOBA game on mobile with players worldwide.',
        version: '1.8.8.8811',
        fileLink: '',
        createdby: 'dramyasr@motorola.com',
        lastupdatedby: 'dramyasr@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/JaMCiVpXC9o1Wa0sz7Sn_8jnn9bDo5CVF2TscUI8gMSoLhlstI35Tg_uZDBNZRJQPsPLjgzGay8fYAEo0fSets-fo7jw_aMJxpDG',
        packageName: 'com.mobile.legends',
        creationtime: 1693575798000,
        developerName: 'Moonton',
      },
      name: 'Mobile Legends: Bang Bang',
      id: '008',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: '',
        lastupdationtime: 1693575798000,
        website: 'https://www.lightyear.com',
        thumbnail:
          'https://lh3.googleusercontent.com/z3xMqe7yLNFhtn8UJs8dQfH75Cq0aOpQ6mv76H1lCFwMwfvEsN6ZAkqWFMSuo2KKmlB0NyA4Hd_-6HOQiOJF75KnssOK4y4Ck3f6',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/VUa3RnOzXl4MWH0592qOluUMxNShS7S7XBJ_yWgtMWZcMotcspbDwRq2YXnZNmIugVrwZmvvBmo0IVnFnPyJqNyRTHWafG29yTP6sA',
          'https://lh3.googleusercontent.com/kzaOCCbGXvdA_ynS_nHu7_Ys8XA7sLWxtOJJgcvuqL6uCYFdXrGmgbgy770WrSrqhG0Q8LzeMu51MH-4Y3VtNFK5ACOr3sf453Wg',
          'https://lh3.googleusercontent.com/VRdVBew8W9pTLvNwOdPCuba1hv1FYS-exCtXQJKCm2lgnqXjQEm2zQIRMIjaXa1U6rgfp7d5w7thrUbDffsyMkdhAtQUbDtc71_x',
          'https://lh3.googleusercontent.com/IGdicPKf62NX-cfz3R_pCZlarwjLvFMrtIg3p_Du_mZ7RJpW3Ki9dWQiUbnF54he2NWkG7fmBhJm51Zdh-uvfy3fYq-qfZBsvBRX6A',
          'https://lh3.googleusercontent.com/9Z-d_KmvA49-0W665O43K1k1VKqj7gxgZ5XKBozPtg0RqiyNWsw2lIQ-7Apbmw-6Wqxg-L5ig7bog4qxe_eUugTAVHVvHS3gyqqs4A',
          'https://lh3.googleusercontent.com/zsYXUI3yTbQcp7wrZmO2yb1zjQNppHkoWTCtDGwn2ON6V3GvXbR2_tPDgZeBBZRf69TsfkzDlwSpnDtSXgGi4OnZM5MrvNle8_zNAg',
          'https://lh3.googleusercontent.com/ASpKLfwW6HudWCGp_S8An4cBr83kCLZ_USP87mys1BesS2meELrJMmwYBBklKluynOsZ-v0YqLEh2AIn9IHdNeJXklc2byZF0XwH',
        ],
        rating: 0,
        description:
          'Capital at risk.\n\nLightyear was founded by an ex-Wise duo to bring a borderless mindset to the European investment world. Invest in over 3500 stocks and ETFs with Lightyear stock app. Get access to multi-currency accounts for stock investing and earn interest on your uninvested cash. Enjoy low-cost access to the international stock market. Research by stock ticker and add them to your market-watch list.\n\nAWARD-WINNING APP\n- Quick and smooth onboarding\n- Awarded "Best User Experience" (AltFi) and "Most Innovative Investment Platform" (UK Finance Awards)\n- Active in more than 20 countries\n- Earn interest in uninvested cash (see the rates on our website golightyear.com/eu/pricing)\n\nMULTICURRENCY ACCOUNTS\n- Investment accounts in GBP, EUR, and USD - Reduce foreign exchange fees for investing\n\nSTOCKS & ETFs\n- Over 3,500 international stocks and ETFs\n- Fractional shares in US stocks\n- ETFs from Vanguard, Amundi, iShares, and more on the most popular indexes\nSECURE\n- *Assets covered up to the amount of 20,000 EUR by the Estonian Investor Protection Sectoral Fund\n- *US securities are protected up to the value of $500,000\n* Protection does not cover losses from investing\n\nCapital at risk. \n\nThe provider of investment services is Lightyear Financial Ltd for the UK and Lightyear Europe AS for the EU. Terms apply lightyear.com/terms. Seek qualified advice if necessary.',
        developerEmail: 'support@lightyear.com',
        shortDescription:
          'Fixing investing in Europe. Build your investment portfolio with our stock app',
        version: '2.146.0',
        fileLink: '',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/KCca7DdAtGNaiacTIc0OT66rL4D-Pu6UMUe0Ax66dsUyY1kGwkdrNsGElfzvGl_o0NgxkLA-E2waHROj-bL6xJOQI6mmJP2sMUMMEg',
        packageName: 'com.golightyear.mobile',
        creationtime: 1693575798000,
        developerName: 'Lightyear Investing',
      },
      name: 'Lightyear: Invest in stocks',
      id: '009',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: '617 Seventeen Mile Rocks Road, QLD 4073, Australia',
        lastupdationtime: 1693575798000,
        website: 'http://www.iecglobal.com.au/',
        thumbnail:
          'https://lh3.googleusercontent.com/pNAYim_ldWvwghgqk9z638x3TDoTbZTKzpJ_iGiqvvw6bAR4M9yPnlLVdP5RAJG7qlBC2Y_XgecXBOQwDGnYt_s2X8-BYPLmEJ4w',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/XFscJTpExCEOaiUNldinEBvQKgKCvyfLHyVxYsyvdCBxoWObXHzeo-2ubr8IaIzw0l9YFA8aYTwAHy6v06lTF064mIOwLMnWW_OY',
          'https://lh3.googleusercontent.com/KeFlBA1VpgzBIlFCL1WCT3GPCy6O9EEDerMqmq0HKn4YAa056mMz7GU64JvYyrH_DunQZ_pKgJ0mpPVKweCvaLVw_YaagzBIuIcw',
          'https://lh3.googleusercontent.com/lqnCzE2iKOGgJrU-DwpSceOqefcPPiLHsl6LKlxMN79tDUToq3So-SgcRLBIbZ8ektpL9DFACNjHxZ0Radi65RJx0Yfktb-9vCBp-A',
          'https://lh3.googleusercontent.com/6a2yqWXU-OOqXEPlq7CyESurCvIYX-jMANHINihXQ4KSosmGGRD1H-9tpj8wNG_pwO0Sq_C_Fw3YLPKPG7sOS1vdD4vCBHprMhMQyg',
          'https://lh3.googleusercontent.com/RXfIfi-Npeb_BmSl9sk7t2PJ_O_YYO63CSfVLY_q0NyIA5wnQwfsfnQsfncP7GHT9OIceL8P3DO_3OO06UpjR8DXpdnDf_N4yns',
          'https://lh3.googleusercontent.com/RrRSmrc8PUPczgPK50Ow5uSEXTBPJ4bhUKc2VO7lBkFi-IRIVrOyNxFzLmDKUJ4BgcEHNP4Uq81CYJFEASvtUWp3DG5KuZd9_Na0',
          'https://lh3.googleusercontent.com/cuA5Y3oPGVIM2rDX2uv0q1iwRmVx2FVcUGxOH7TF0RU7trkXU8CXzUM1cCG_ObhQ09MyMquwAQxZPaKLwGSHHyvWGZTzcxr5jNb5',
          'https://lh3.googleusercontent.com/ND6XrjWu6CiWmKPbxMdQivrBvidpadzYXPBa9tPwRlhrzzO7tS1pILUlJainyGFV4BGv8rodSt8I_W-xMJ1frDGWuMrnsGFQTuI',
        ],
        rating: 4.536998271942139,
        description:
          'Ball Sort Puzzle is a fun and addictive puzzle game! Try to sort the colored balls in the tubes until all balls with the same color stay in the same tube. A challenging yet relaxing game to exercise your brain!\n\n<b>★ HOW TO PLAY:</b>\nu2022 Tap any tube to move the ball lying on top of the tube to another tube.\nu2022 The rule is that you can only move a ball on top of another ball if both of them have the same color and the tube you want to move into has enough space.\nu2022 Try not to get stuck - but donu2019t worry, you can always restart the level at any time.\n\n<b>★ FEATURES:</b>\nu2022 One finger control.\nu2022 FREE & EASY TO PLAY.\nu2022 NO penalty & time limit; you can enjoy Ball Sort Puzzle at your own pace!\n\nRecent changes:\nFix bugs, increase stability\nAdd more levels',
        developerEmail: 'support@ieccorp.vn',
        shortDescription:
          'By tapping the color balls into the tubes, you can sort them.',
        version: '15.0.1',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/010.com.GMA.Ball.Sort.Puzzle.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/r5TtDLQDJYyaIuCiuKgLo0TPvymx6O0nOpbS2aF1Jn4yClkRxRtN3idW_fVGta87zXy-6xrg6txXNpUE_-lFVCvVJX7ERUBJ1xz7AQ',
        packageName: 'com.GMA.Ball.Sort.Puzzle',
        creationtime: 1693575798000,
        developerName: 'IEC Global Pty Ltd',
      },
      name: 'Ball Sort - Color Puzzle Game',
      id: '010',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          'OFFICE UNIT B ON 9/F THOMSON COMMERCIAL BUTLDING 8 THOMSON ROAD HK\n',
        lastupdationtime: 1693575798000,
        website: 'http://higgsgamestudio.com/',
        thumbnail:
          'https://lh3.googleusercontent.com/rKRpZ6aI5yNfEyTKJnDED47JAix_rT_SbirL8lrf1SbXNmj9mulzeZMFBzjwd8X1F_YSGdRBOO-1wquc6_ogq9yC5dsINDtWAdEP',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/e-1qzYtga8DEKjyaoOxHUVblRdyXiO_jS0SrD8WWPkA2S5o62n_84HCILi_kCvGXybAEIR7W6zfqbL9kdRaT8BEdTlxZDYDjvid3',
          'https://lh3.googleusercontent.com/DZaj7lj0mIQKOCRFjoqSdtoB2l-60F4EvyCvWa2CimJNdi18Pp9Oc6afFBtdt5KGuPoFfz88DUzuDbZrfFQk5XbaXy_gvs5Geq_K',
          'https://lh3.googleusercontent.com/jVUawAdGyac6FIfRTxFu9qZS-Y1Bcphwaokjplw5ddl_WcjLe_mM1Sn1iRd0jXeklxGRmUHuuIur1SeUMBwkJYC1hnFC4AiJsHVhqw',
          'https://lh3.googleusercontent.com/Cb7-AeMPctVnIJ7_hZbNPpqAFguoeSgqnV0Hrzf_rCFep1pF46iqpM5JgK9qN1-zdwPcafOe9mg31Ojs6FFosVPGzwhYbvgN9av3',
          'https://lh3.googleusercontent.com/BIOFv5YZznBmaKto_xl3umUpD13t-ZbnCmgeYaPRTcgKcKoHkH0zr1UGFz-HwCpqT1pJ_dBW2sEhqXrq6AWEgwIRpqlPtCBU7OqT',
          'https://lh3.googleusercontent.com/VRSFATN1Fotsac98oNp9mD-5gd1R839iVVYWLCQOfmesCeHeCjRLi-_soVLcQQPFENuX65g9kG__m1Cp5-womrMCCno663oEn_ml',
        ],
        rating: 4.373737335205078,
        description:
          "Tile Master 3D is a new and stylish free matching game entertaining game!\nBy finding & matching 3D items in a limited time, you can power up your brain and speed up your thinking process. Hundreds of cute and diversified 3d combinations are waiting for you!\n\n✨How to Play✨\nPick up three same 3d elements from a pile of messed-up items and eliminate them.\nPay attention to the collecting bar; do not fill it up, or you'll fail the game.\nUse boosters to help you quickly finish the level when necessary.\nTry to clear all 3D items within a limited time to challenge higher levels and earn more rewards!\n\n💎Game Features💎\n- 100+ cute 3d tiles in high qualities: \nelephant🐘, cake 🍰, cars🚗, fox🦊,numbers2️u20e3, fruits🍉... in different colors & shapes!\nAs you go further in the journey of being a master in matching 3D elements, you can unlock new items one after another, which will definitely surprise you!\n- Powerful props to help you easily pass the level. You can pause the time, directly eliminate some elements, change the layout...and so on!\n- Easy to play. You just need to drag & tap! Addictive and sometimes needs a strategy.\n- Well-designed Puzzle levels, unique 3D elements.\n- Available to play on both mobile phone and tablet!\n- Improves your memory, 😛attention, and concentration trains your brain\n- The best time killer when you want to relax.\n- Level rewards\n- Random bonus up to 5 times than the basic reward.\n- Surprise packets are waiting for you!\n\nTile Master 3D is absolutely an addictive puzzle game that you must fall in love with once you play it. As a board game, this matching 3d game is simple & entertaining for anybody to enjoy! \nDon't be hesitated! Try the free triple matching puzzle -- Tile Master 3D now! Level up and grow to be a master in finding & matching elements, show your nickname in the weekly ranking!\nPlay it OFFLINE/FREE at any time, anywhere either on mobile phone or tablet!\n\nRecent changes:\n- Added level system\n- Optimize game experience\nUpdate to explore new features!",
        developerEmail: 'tilemaster3d@outlook.com',
        shortDescription:
          'Popular 3D puzzle & triple matching games ! Enjoy match 3d game.',
        version: '1.9.2',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/011.com.higgs.tilemaster3d.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/wNle3D9OCst_04jpR7iVnEH-U9hKFRvJWtGw58p68QtbLbj-gnlMDEY687KJIm5tlPqp8GbBdJnbbwGFGe1A0goGqMnBHez9ahKX',
        packageName: 'com.higgs.tilemaster3d',
        creationtime: 1693575798000,
        developerName: 'Higgs Studio',
      },
      name: 'Tile Master 3D® -Classic Match',
      id: '011',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: '',
        lastupdationtime: 1693575798000,
        website: 'http://natura.net',
        thumbnail:
          'https://lh3.googleusercontent.com/gOOp00IyZ7I3tUgGkTfNTlAWXB2JCKDfV-sxxBXJWvw7wwfRQOXOup5CSqnHs4Kq53oYbYHjPblC60MukLC9FoMyHNn5fB6A4Mtu',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/MOCml-Q81RiQimccoUoJkyB006Yt9yGzDSlvpjmjOf1gKbk0x8iaeHrMKNnsr3upjiuBCKLYfXOCDmfl-3CoZFA',
          'https://lh3.googleusercontent.com/d3gOBnhceRIQyUZAGF7Waqa_Dj9WXJXzpcGTQ4rMznTZuMpgao5V0C_XM-Xb6L08bmwR1jjTggD_aElzKjvf7PE',
          'https://lh3.googleusercontent.com/3oEVrLbOGIekhkO-bPpvo1PizPtV2J0Tjbd0GtnkVd0ua1LhEQrzHCVROVvDaaMy4MOU4mKR4U3w6oV2KZ08kGY',
        ],
        rating: 4.440000057220459,
        description:
          'With Natura On you can place orders and monitor them from anywhere; keep up to date with news; find, create and share exclusive and relevant content; access and share our e-magazine, and much, much more!\n \nDownload Natura On and start boosting your business now!\nNatura On is exclusively for Beauty Consultants.',
        developerEmail: 'minegocio.expcn@natura.net',
        shortDescription:
          'Everything you need to be a successful Natura Beauty Consultant is here!',
        version: '6.96.13110',
        fileLink: '',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/lyUAM60i7M0226yeuBsi0NXT6OA-OwDzZ0JmceQdlx1nVz9AZQRxy6cZHJdNbT27iYvoOQQb1IJSK9rgy9mTj5b86FJj4rAmRXs',
        packageName: 'net.natura.minegocionatura',
        creationtime: 1693575798000,
        developerName: 'Natura &Co',
      },
      name: 'Natura On: MyBusiness',
      id: '012',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: '',
        lastupdationtime: 1693575798000,
        website: 'http://www.booking.com/apps.html?source=googleplay',
        thumbnail:
          'https://lh3.googleusercontent.com/_VRHHsVk0gaxb51C7VnjCOPKlDs5HeHsuLb8A_jxU4diqCr_lP0Zc1u8kDVfDFD1c9NkviH2ct0N48bDfIvxzp0IXG7y-dGNnxQC',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/Gc8WkPjAdKYnrQg-VbNM4JPqXKi_-s26_kDp0wEHVjv5-NmSu7J-fTNBBtV4Wm7z9REFEBmEwrT257pix3SOkmcSy1Xoc7UIKTYeRQ',
          'https://lh3.googleusercontent.com/cTzVFQV0RV3DnPAWZAHspRuJ9lJmAnHIFOTkhbhCDTMPLtf07uJ5At3chQE8kjARTWCLMz4GD0JG3ZhZhe7eM_60Vu6rLjAbpCBf',
          'https://lh3.googleusercontent.com/LGePdwKqWcG83tPgULgb7R0-IGm7AdXNl4g9TFZC8uGNLwr4ifMEYyf8GSDd9bwRaVt8DW4fm-Mc9ycJ4myXTxMDSXAMv7CZ-9RRbg',
          'https://lh3.googleusercontent.com/BYi1bj-fUFDic54B4kYd-1z0IMwbZ5_u9AE4AT671Szwu7wTkH8W7N_ZDcRzk6eyRo6zKLOW_sukjNc1oX-74gN3uKGvPygDHDTLNA',
          'https://lh3.googleusercontent.com/wQcrT1T88mkqZSpUOWSviRiF2NB-VyQpwRkZ_SyX9t4pyhTVSPsBXAHqhZnpIUwcPu_At-JhOK0d9CBdiSQXgBMUE562apjSccT9',
          'https://lh3.googleusercontent.com/nAcSJJr9zrA2UrnC2Fwy4X7HeK8o9OJVHTuQXVrdjSK2Hskpcj3NeWjjvTLXfcLqu2MgPg5HqZiEAJ6xjHBMS93DKdxybtK4Nsp_fw',
          'https://lh3.googleusercontent.com/WWRVdYIeFGOUPKZRn0gp9U5BjUNfKqjbh4aXWHlEuvmLG77kZ1xODQyhPo3SYi1DNhpXXzUVFeZIytSLx44yESC5L-18YcZ7KAiWSA',
          'https://lh3.googleusercontent.com/tZibxq0yzKQiOa0AjvtdMLLiZvSN-d4n2_AecdkZ6tj_ZK2FX21V-HUGtFieLXFugpijauz--kXGJGrzt5_-txvFi4rATyinmsOn',
        ],
        rating: 4.570522785186768,
        description:
          "Save on your next trip with the Booking.com app! Find great hotel or apartment deals and book in just a few minutes. You can also book flights, rental cars, and more through the app.\n\n- Book your whole trip in one app (accommodations, flights, car rentals, taxis and more)\n- Stay flexible with free cancellation (available at most properties)\n- 24/7 customer service in more than 40 languages\n- No booking or credit card fees\n- Chat directly with your property in the app\n- Enjoy mobile-only discounts\n- Use filters to easily find the perfect place out of millions of available accommodations (hotels, apartments, homes, villas, ryokai and more)\n- Get paperless confirmation of your reservation u2014 no printing required\n- Manage your bookings on the go, making changes whenever and wherever you want\n- Discover local attractions and make the most of your trip\n- Share your experience and get local advice on our Travel Communities forums\n\n<b>Access millions of accommodations </b>\nFrom cozy country homes to funky city apartments, find the perfect place out of millions of available accommodations. Our app offers hotels, apartments, hostels, vacation rentals, resorts, motels, guest houses, and bed and breakfasts.\n\n<b>Quickly find the perfect place to stay</b>\nFilter hotels by price, review score, WiFi quality, and other things important to you. Search cheap hotels by city, attraction, landmark, or hotel name. Special requests? Pet-friendly hotels? We have filters for everything. You can also compare your favorite accommodation options side by side to ensure you get the best price and quality.\n\n<b>Deals for any budget</b>\nDiscover daily accommodation deals and save on your next hotel, apartment, or villa booking. \nGet exclusive mobile-only discounts of 10% or more on select properties when you book in the app. Savings available on motels and hostels, B&Bs and resorts, and luxury hotels, inns, homes, houses, apartments and vacation rentals. Find your ideal accommodation at an ideal price. \n\n<b>Stay flexible with free cancellation</b>\nChange of plans? Not a problem. You can cancel for free at most hotels, apartments and other properties on Booking.com. And the app makes things even easier u2014 it only takes a few taps to cancel, and youu2019re free to find a place that better suits your needs. \n\n<b>Last-minute travel</b>\nHeading somewhere in a hurry? With the app, you can quickly book hotels at the last minute (as well as far in advance).  Finding a place in short order has never been easier. Our app allows you to search for properties nearby, fill in a few details, and secure your reservation. You can also change, cancel, or make additional reservations on the go.\n\n<b>Jet off with the perfect flight</b>\nBook domestic or international flights on the go with ease. The app allows you to search thousands of airfare deals per day. Plane tickets available for all major airlines and destinations.\n\n<b>Hit the road with car rentals</b>\nCar hire has recently been added to the app. Whether you just need a ride to explore your destination, or youu2019re going on an epic road trip, the Booking.com app can help. Rent a car from all the major companies and hit the road!\n\n<b>Reserve taxis with ease</b>\nBook in advance for a seamless connection from the airport to your destination. You can also book taxis to and from other pick-up points, such as hotels and local attractions.\n\n<b>Find and book a great experience</b>\nWhether youu2019re looking for attraction or museum tickets, boat tours, or walking tours, you can book experiences online in minutes, with free cancellation on many options. \n\n<b>Get and share tips with other travelers</b>\nConnect with fellow travelers, share your experiences, and get local advice on the best accommodations, attractions, and more. Discover new experiences with our app, the perfect trip planner.\n\nRecent changes:\nWe added some important info about our properties. Our listings now include details on each accommodation's cleaning practices, social distancing measures, and other health and safety policies.",
        developerEmail: 'customer.service@booking.com',
        shortDescription: 'Book your whole trip in one app.',
        version: '39.4',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/013.com.booking.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/_pNF8B9KPLetdcGzUXiBe2SsSM_g1rCzRoa1_av_aLdgq9p3307wsUxz0YC1fftkFeFWvoOHp2cB2AD9DiIXBagPtBwz3g1tcBtPJg',
        packageName: 'com.booking',
        creationtime: 1693575798000,
        developerName: 'Booking.com Hotels & Vacation Rentals',
      },
      name: 'Booking.com: Hotels and more',
      id: '013',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress: '1 Hacker Way\nMenlo Park, CA 94025',
        lastupdationtime: 1693575798000,
        website: 'https://www.facebook.com/facebook',
        thumbnail:
          'https://lh3.googleusercontent.com/7Z0wXhHcmNRweXCRyyZTZwxM22OR-Gu0RuD4flYIRp23FDywZcBYXuYohZ379EOC0VX_86NeVUuE3is9vHtqCkA',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/-E3AUPLIY_XnmsPA_rKDiVUxhKTEbijQxkRrUlQyJ_pI66GexrD2OQjDhp5_X36Q0ZPbmQChAMfar_jgtH2vcPpzqCBTFsTUl4r6',
          'https://lh3.googleusercontent.com/iETYaZiwqxQFQ3ajvew5t-iFkuAtCWQKG621eGxEvyM8RrG6iTUpYEHyhKMYkSgcLNwh_rkO_jWGlCHmZmwqVJQcAmYL2Rzh-fg3kA',
          'https://lh3.googleusercontent.com/nxnGbdd7hK6gdkhTQ9hos2DivaWqcvymH8mSJ72ku4YeeTBzv2k-YzwwmBvpO8JdrkK2TeHEwasiCrhTlUxaBnJqBpuXOqdlVM1G',
          'https://lh3.googleusercontent.com/6sPcOb6pVQI9Gu-dAcZzmW9LIyKpxQ3B-PVsaVInsQYtLQSk3anYoMRFNL98j5axInQiluZTexW6Hq0VMSbCL5cNMrNGCTlA8rUE6g',
          'https://lh3.googleusercontent.com/tz4PpLyACnKTKDceIbHao5iwpy9IBwyT-fVcaICCU7umOVDHCAS0DzFqQARsuikinaE_7O5TEcfzT1aDAqDq3hRbvn6cnCPdf8L9SQ',
          'https://lh3.googleusercontent.com/kmYPGfimBWrT6Z5KuYyZqXHNLWsUIEsXbr5G1m_kwkKHxHm6n3s-73f8ffd-VmJIs-NqnBtJ_ukTRaZe67BoxEU2YKuKII9LPwXa',
        ],
        rating: 3.245546817779541,
        description:
          "Keeping up with friends is faster and easier than ever. Share updates and photos, engage with friends and Pages, and stay connected to communities important to you. \n\nFeatures on the Facebook app include:\n\n* Connect with friends and family and meet new people on your social media network\n* Set status updates & use Facebook emoji to help relay whatu2019s going on in your world\n* Share photos, videos, and your favorite memories.\n* Get notifications when friends like and comment on your posts\n* Find local social events, and make plans to meet up with friends\n* Play games with any of your Facebook friends\n* Backup photos by saving them in albums\n* Follow your favorite artists, websites, and companies to get their latest news\n* Look up local businesses to see reviews, operation hours, and pictures\n* Buy and sell locally on Facebook Marketplace\n* Watch live videos on the go\n\n\nThe Facebook app does more than help you stay connected with your friends and interests. It's also your personal organizer for storing, saving and sharing photos. It's easy to share photos straight from your Android camera, and you have full control over your photos and privacy settings. You can choose when to keep individual photos private or even set up a secret photo album to control who sees it.\n\nFacebook also helps you keep up with the latest news and current events around the world. Subscribe to your favorite celebrities, brands, news sources, artists, or sports teams to follow their newsfeeds, watch live streaming videos and be caught up on the latest happenings no matter where you are!\n\nThe most important desktop features of Facebook are also available on the app, such as writing on timelines, liking photos, browsing for people, and editing your profile and groups. \n\nNow you can get early access to the next version of Facebook for Android by becoming a beta tester. Learn how to sign up, give feedback and leave the program in our Help Center: http://on.fb.me/133NwuP \n\nSign up directly here: \nhttp://play.google.com/apps/testing/com.facebook.katana\n\nProblems downloading or installing the app? See http://bit.ly/GPDownload1\nStill need help? Please tell us more about the issue. http://bit.ly/invalidpackage\n\nFacebook is only available for users age 13 and over.\nTerms of Service: http://m.facebook.com/terms.php.",
        developerEmail: 'facebook.android@fb.com',
        shortDescription:
          'Find friends, watch live videos, play games & save photos in your social network',
        version: '429.0.0.27.114',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/014.com.facebook.katana.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/bhJPbAHyg0DdBQqvlPV-WGuWqZD5uofxB7Dpud3sznuq3vI2PbIq1xtouyoK_2OrZwF7IUXsVdZyxVrg4XkRmS4',
        packageName: 'com.facebook.katana',
        creationtime: 1693575798000,
        developerName: 'Meta Platforms, Inc.',
      },
      name: 'Facebook',
      id: '014',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          'LinkedIn Corporation\n1000 W. Maude Avenue\nSunnyvale, CA 94085\nUSA',
        lastupdationtime: 1693575888000,
        website: 'http://www.linkedin.com/',
        thumbnail:
          'https://lh3.googleusercontent.com/1VbJDYyHtaR1I0olCN_uRpKIGC8CrqSLPYhSi0vz6C03vlYYCPb8i6hul_fHNyxVyihOyxEiJVFZc8FIZ6Ar1oH6UIwrN3VkEexi',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/5KbdmKN5es17ZyeigYTVsG8So3no6uHEJyk05ZoXalYAB_ehBHGuyxGOdbAk8I3wQrS8-wqY3a-KA39zS1Gh99SbAGFNwwHvhB4A',
          'https://lh3.googleusercontent.com/tA1ArBQF8lIKJIy--jSpZZUr2CjSfrs_O5oG9DdvsfQCUGF5vV_fpdl1O0lEFut6IG-QAqQ0tn9uD3vaXXrbtrQpW4N6UNzCbBk4',
          'https://lh3.googleusercontent.com/-9xciwCiM1oaVT-_DH7qKkDoUsfZDT933gPenHkQHrSvLJYcxQ1ctImq9DAqIA-8L02GIEliRxe3xIqAZnqHNkbK2Ui0PSAqAhs',
          'https://lh3.googleusercontent.com/EcR1ii3GE2FQYVQBpoNWOtMaiyRI2Loxk9TKB1DWET9lG4hH9dIiuQE59k_W_MSa01yaNUmSgFzzjrh7gVpFigjXsKxSw0uoZtzt',
          'https://lh3.googleusercontent.com/BtuZBLPqjkS_zSevCyx2Et756H_zTjMorHgF8hYh4F81DQVRpebkjW_rII6glasxTrw0biZEHL9crWpzgFrX80ZjSQhKhoNdEYyC',
          'https://lh3.googleusercontent.com/6GEs0nsb3yyFG_o_84ZPp8ItqT63RoxdbNV4hin323-nnogpszmqxN9k3J_XDLrZZAtNGwnO1SAgQEvOryxQNA2-qRD6RxNqetfH',
        ],
        rating: 4.229079723358154,
        description:
          'Welcome professionals! Are you looking to apply for jobs and build your career? LinkedIn is one of the largest social network apps for online jobs. Here you can grow your business community, connect with industry leaders, follow the latest business news, and build your career path. \n\nStarting your job search? Build your resume, develop business contacts, connect with recruiters, and apply for your next job. You can find remote, part-time, freelance, or full-time jobs hiring on LinkedIn. You can also set job alerts for local or remote roles, build your network of business contacts, catch up on the latest industry news, read articles, and stay up to date with companies and industry leaders.\n\nGet business insights before you apply, including company information and job responsibilities. Then quickly and safely apply to any position through the app with your resume or profile.\n\nReasons why youu2019ll love the LinkedIn app:\n- Job search & recruiting: Research companies youu2019re interested in and find positions suited to your skills, then apply to a new workplace with your LinkedIn profile, CV, or resume.\n- Resume builder: Build your online resume, highlight your skills, and find your next employer\n- Business news: Get relevant news delivered to you and join the conversation.\n- Social network: Create your profile, update your resume online, and make connections\n\nLinkedIn App Features:\n\nJOB SEARCH\nu2022 Find jobs and make connections through your LinkedIn network.  \nu2022 Search for opportunities and set up job alerts\nu2022 Jobs Hiring: Apply for jobs in every type of profession and get an interview for your dream job\nu2022 Find local jobs in your area or online that let you work from home\nu2022 Job App: Easily manage multiple applications and set up job alerts for any full-time or part-time jobs you might be interested in\nu2022 Career builder: Find career opportunities in every field, and get the job that is right for you!\n\nBUSINESS NEWS & INSIGHTS\nu2022 Stay up-to-date by following business news and company content from related industries\nu2022 See what your connections are saying in posts and conversations\nu2022 Share articles and newsworthy topics with your LinkedIn community and business contacts\n\nSOCIAL NETWORKING\nu2022 Leverage LinkedInu2019s social networking tools to increase your connections and grow your career\nu2022 Connect with members around the globe on the largest social network \n\nBUILD YOUR BUSINESS COMMUNITY\nu2022 Easily find groups or communities that share your interests on LinkedIn\nu2022 Network on the go; Easily connect with new contacts and industry experts\nu2022 Follow companies, top voices and professionals\nu2022 Social networking for businesses: Gain new opportunities through showcasing your company or product\n\nRESUME AND PROFILE\nu2022 Job Finder: Apply for jobs using your LinkedIn profile\nu2022 Social Network: Build your professional profile and make business connections\nu2022 Resume: Create your online CV and use it as a resume for job applications\n\nWhether youu2019re a job seeker searching for new employment, want to build your business network, or catch up with business news and industry buzz, LinkedIn can help.\n\nWant to make the most of LinkedIn? Upgrade to a Premium subscription for exclusive tools.\n\nWe ask for a few permissions when you use this app. Hereu2019s why: http://linkd.in/1l0S8Y\n\nRecent changes:\nThanks for using LinkedIn! We regularly update our app to fix bugs, improve performance and add new features to help you connect with your professional network and advance your career.',
        developerEmail: 'team-mobile@linkedin.com',
        shortDescription:
          'Find relevant job openings, set up alerts and get salary insights with LinkedIn',
        version: '4.1.852.1',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/015.com.linkedin.android.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/epF8Kd_eXaGooOC8eqXsjHWQJ9gKK4HWJbvc7xcpM3h0kqhKzdHoCAsTRR24VudbsIIxN0Tr6GA_n6AUMb8UBRGxnR2wc80hnLA',
        packageName: 'com.linkedin.android',
        creationtime: 1693575888000,
        developerName: 'LinkedIn',
      },
      name: 'LinkedIn: Jobs & Business News',
      id: '015',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          '2772 Donald Douglas Loop, North\nSanta Monica, CA 90405\nUSA',
        lastupdationtime: 1693575888000,
        website: 'http://www.snapchat.com',
        thumbnail:
          'https://lh3.googleusercontent.com/d2WeAY_FaScglNArzVHqZ-LRoHQMRJdoiPYYXUnayqEAnk4bS6SRFs3l1BvPwdp7G5VUvXmiBWxqZgdSIkxmDXM',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/0sVmw0Urz4YtGWoCIuvtJGk2q0lokg-Lm3dbSMnEO69anxtFT8pb8hnScLynslKX_tXWQyc1FeQHUV13-HYD2moZnaXO6RWhvss',
          'https://lh3.googleusercontent.com/fBz0p4ckAf7Sj0yMgChdYoUtdApyMWVldmmSvt9-oqIArdCGIgqiCIUJ-aRXJqi_q5IfhEl6ejItRCSRYeZe86gAnWd3e_MLDexdlw',
          'https://lh3.googleusercontent.com/iLn7wy4c1CD3-ppFw_sUXyVtPVdHPnF7dKz0vTza-OmhyN41iSWFM0p36G5JUBZEAN7DUAENyeW91lGtVxY5hJYDhOMTi64RLyoI',
          'https://lh3.googleusercontent.com/wrADxZux6tJddtiENtFgLzsN11CIo6X6wQccfvFbkkvwlj5oUszvcQZX8HP7iwJdPhrxbjXExJKqnAGJy8iZedfp2AJys_7eI5c',
          'https://lh3.googleusercontent.com/O5kZivuACqw6GA00H9yWq_Li3LZ-iLZQ_BM-SLxtYWtkV7KKZAlwynoJH_wVjWFKJRrbzmTdfWJh9voxz1rmb_hPc-KOeABtkKg',
          'https://lh3.googleusercontent.com/Ou6wsPEfWwL3JOXzgXs50Gw04y4r53PkRyJZAq8D7lgSIiWgevwpEQUuLjstDVNDbsAusbzzoRHwRpme-85UaH0eCWcvVnuSZbDvEg',
          'https://lh3.googleusercontent.com/pMpz9QQQZgGxpLp5NzHC_1KjzFs7ue5cHQinRcayQUFrPKYyxMmLgjBtjPEWTud_-tb8NO4hIsRKloxPh8huvN5soVcwhiZwt8o',
        ],
        rating: 4.085493564605713,
        description:
          "Snapchat is a fast and fun way to share the moment with your friends and family 👻\n\nSNAP \nu2022 Snapchat opens right to the Camera u2014 just tap to take a photo, or press and hold for video.\nu2022 Express yourself with Lenses, Filters, Bitmoji and more! \nu2022 Try out new Lenses daily created by the Snapchat community!\n\nCHAT \nu2022 Stay in touch with friends through live messaging, or share your day with Group Stories.\nu2022 Video Chat with up to 16 friends at once u2014 you can even use Lenses and Filters when chatting!\nu2022 Express yourself with Friendmojis u2014 exclusive Bitmoji made just for you and a friend.\n\nSTORIES\nu2022 Watch friends' Stories to see their day unfold.\nu2022 See Stories from the Snapchat community that are based on your interests.\nu2022 Discover breaking news and exclusive Original Shows.\n\nSPOTLIGHT\nu2022 Spotlight showcases the best of Snapchat!\nu2022 Submit your own Snaps or sit back, relax, and watch.\nu2022 Pick your favorites and share them with friends.\n\nMAP \nu2022 Share your location with your best friends or go off the grid with Ghost Mode.\nu2022 See what your friends are up to on your most personal map when they share their location with you. \nu2022 Explore live Stories from the community nearby or across the world!\n\nMEMORIES \nu2022 Save unlimited photos and videos of all your favorite moments.\nu2022 Edit and send old moments to friends or save them to your Camera Roll.\nu2022 Create Stories from your favorite Memories to share with friends and family.\n\nFRIENDSHIP PROFILE \nu2022 Every friendship has its own special profile to see the moments youu2019ve saved together.\nu2022 Discover new things you have in common with Charms u2014 see how long youu2019ve been friends, your astrological compatibility, your Bitmoji fashion sense, and more!\nu2022 Friendship Profiles are just between you and a friend, so you can bond over what makes your friendship special.\n\nHappy Snapping!\n\nu2022 u2022 u2022\n\nPlease note: Snapchatters can always capture or save your messages by taking a screenshot, using a camera, or otherwise. Be mindful of what you Snap!\n\nFor a full description of our privacy practices, please see our Privacy Center.\n\nRecent changes:\nBug fixes and improvements! 👻",
        developerEmail: 'snapchat@snap.com',
        shortDescription: 'Share the moment!',
        version: '12.49.0.67',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/016.com.snapchat.android.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/3WupNZwRQmZm9Hpzsmr7z0c62KatqhevKJlBLLzVvyo8NFsaC9Piwyinc68ye9YlnLUM7lszIRpoCJlqHzc5l4U',
        packageName: 'com.snapchat.android',
        creationtime: 1693575888000,
        developerName: 'Snap Inc',
      },
      name: 'Snapchat',
      id: '016',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          'Spotify AB\nRegeringsgatan 19\nSE-111 53\nStockholm\nSweden',
        lastupdationtime: 1693575888000,
        website: 'https://www.spotify.com',
        thumbnail:
          'https://lh3.googleusercontent.com/LPLbgZqnieGZMVshCwPxuEHkJfEBVA9NXRgFI2juxbO5aauZa7gLEcz6mNhrRpUmZhLOD69yqvn7Nk2HM3WGBbwwnu308nWn_Bbl',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/Lt85DhFxWUj3j7uoT4vLbN2sn2qiephM7JY_IPAsygtiPmjBy7xjgWLyyBwpU6wd16kqtHYQGYlViRvOmkuuuWdShdaDdBGMy_eF',
          'https://lh3.googleusercontent.com/liKSF-oEjOk4ymA1el2_DZNvSqSWUNgLDZ0t0RQAuCWE8G2E6IPQEFMBPeUkVaxQuX9D18k8-faSqXffeTH34BabuGkt0h1kfK_b',
          'https://lh3.googleusercontent.com/nF___Z9xG5Dg3ZF3vVaL9sj8rb1xEUL1eYRG6ittI9cVmVHGKaGwXSibIPPVMKvD9LhPRufNIzLYq4mwteTBzUsqqm0x9sf6DF5Q',
          'https://lh3.googleusercontent.com/GJn7ElhuG26uXYq5GLVoOwrUpazXedYM-LgT0tO6RiR34bYv4n7A3t81KoA3BhlX05d-XpkTDqwtaghaIX9nhdhLMX0qDiW7xEEj',
          'https://lh3.googleusercontent.com/v_mZycA9Bga3sctClKARe_0jmdRhAF9SkUSXX0N0UwMiotd7R8zlauvfuoRXeHHK8p8-rTYYMqZDwNAp4gBUxkhLB3KGIe15_MAtlQ',
          'https://lh3.googleusercontent.com/IX_lf3glRgnopCWWxgAaL2mKjd2Q8D8WTDTl-RBrL-ZOLoloZ-TNUChiJ0obHio9aKbVx9RLk4TV5tCtDxeoaB3mWyjvXKl0f6c',
          'https://lh3.googleusercontent.com/4cpsJC9S8vRtJiZYhZLDnz6yBqTdNJ01ATmN4i9_zsCqLXDWX72pZBcakwjGcr_npHeV20VpleCDInBnjfCurO1Xd4ksKsj8Q_zg',
          'https://lh3.googleusercontent.com/Xxz8bNyYizTKA0PVZxx7gN-kXYILd9-P87idkDWSR57XGT9b1JDgZwmvYInKUutTphbcbzleU2VSVgw7qqSTdVBsvXkX5Ps3pB-gXQ',
        ],
        rating: 4.385632038116455,
        developerEmail: 'support@spotify.com',
        shortDescription:
          "Listen to songs, play podcasts, create playlists and discover music you'll love",
        version: '8.8.66.563',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/017%2Ccom.spotify.music.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/c95-VFGTkPT1uyurXqWe8pSHn3gDLO-ZrVmIBm4DVdczbyQ586Yme2Ej2mGmBrVSVHJi6aVNzS1_F-PdDjCG5VgDdGXRDLio9gOZ',
        packageName: 'com.spotify.music',
        creationtime: 1693575888000,
        developerName: 'Spotify AB',
      },
      name: 'Spotify: Music and Podcasts',
      id: '017',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          '1 Raffles Quay, #26-10,\nSouth Tower,\nSingapore\n048583',
        lastupdationtime: 1693575888000,
        website: 'https://www.tiktok.com/',
        thumbnail:
          'https://lh3.googleusercontent.com/7LWnfRDGrb8b7tKyLKGrbY3nk2jeHeDYW05y-vP-sUURRCKNu3Zbs3uM-GIQe-qYUVlMUbR79fULEDX-44JdNp90V_yxgMoXIVs',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/OdS76bX3FJx5kWD9DOS-5pTuaxdtXmOTKNPPenqEzSdOC3AUE4BnvJXIpACwGzFi4iTamcAJae840bxN5n4M81feuNSpFenzP_EI',
          'https://lh3.googleusercontent.com/c9dWnErf13tlx5Yw3NoE8FJGzKmVoylIyKEBUFBbMTA34FTxEpWQl9lBU2ttD6D7ng2b-Sh8FeqhLnLzsEtaah19_jzKdbdoGUc',
          'https://lh3.googleusercontent.com/ckMXZz6XVK5kVpplVzg6p56SqZi4BCtyAY7VI6JLT46sGGxVg3H3MgxJoryC8fIijUJpJoPydPBfMGv8zm3DOnHkQhcfSlgeyMfa',
          'https://lh3.googleusercontent.com/hw4xGY2-luQn1Iv-WGYGYd4QUrvlZ-xNjtUzeVszNj9B23D3ze39tI_Kbc5e8C7N87xQ7EqBAOm10aA5482WA8Ba6d5ZnxwH7eLd1w',
          'https://lh3.googleusercontent.com/hTNWupu6iEziwRjnMBOI_4aypt2UsqVr5aUGGK8nU5JNBKappaTYAx7_ZNnp7sIIoFI16iEMK6q6CjGkyp2cG8-4rOFlLi2jccrj',
          'https://lh3.googleusercontent.com/HEgGED3zElMUDmkU_Sq04p2QJ5Q7t8FpRD6i_QFALNA4y9FnjcGq_MeTYD3setRLCmZF0iNjHB1sNmUCOAYWWTH-_PZIwJvWG0Uo',
          'https://lh3.googleusercontent.com/U4z4ydzlgH7fiDuzmwEBn8eoZzX2zTk6G7otDL8Sr3O22uAg50zX9y6XD67I9ktIVnxQ-x1ANXdtz_IyC2nMTjhYwwQk_4AuZps',
        ],
        rating: 4.3323655128479,
        description:
          'TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether youu2019re a sports fanatic, a pet enthusiast, or just looking for a laugh, thereu2019s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you donu2019t, and youu2019ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.\n\nWe make it easy for you to discover and create your own original videos by providing easy-to-use tools to view and capture your daily moments. Take your videos to the next level with special effects, filters, music, and more. \n\n■ Watch endless amount of videos customized specifically for you\nA personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.\n \n■ Explore videos, just one scroll away\nWatch all types of videos, from Comedy, Gaming, DIY, Food, Sports, Memes, and Pets, to Oddly Satisfying, ASMR, and everything in between.\n \n■ Pause recording multiple times in one video\nPause and resume your video with just a tap. Shoot as many times as you need.\n \n■ Be entertained and inspired by a global community of creators\nMillions of creators are on TikTok showcasing their incredible skills and everyday life. Let yourself be inspired.\n\n■ Add your favorite music or sound to your videos for free\nEasily edit your videos with millions of free music clips and sounds. We curate music and sound playlists for you with the hottest tracks in every genre, including Hip Hop, Edm, Pop, Rock, Rap, and Country, and the most viral original sounds.\n\n■ Express yourself with creative effects\nUnlock tons of filters, effects, and AR objects to take your videos to the next level.\n\n■ Edit your own videos \nOur integrated editing tools allow you to easily trim, cut, merge and duplicate video clips without leaving the app.\n\n* Any feedback? Contact us at https://www.tiktok.com/legal/report/feedback or tweet us @tiktok_us\n\nRecent changes:\nSquashed bugs for better experience.',
        developerEmail: 'feedback@tiktok.com',
        shortDescription:
          'Join your friends and discover videos you love, only on TikTok',
        version: '31.0.5',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/018.com.zhiliaoapp.musically.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/aLA96RJk2M5QvKnMQRfBKOhlNLHQ_0eq5MyuTDxHftbzbB_buDZD-pE3YaU_AZKI2BBDZGUVuJBuauOGSmzIYJUjdBnbES7ox-AH',
        packageName: 'com.zhiliaoapp.musically',
        creationtime: 1693575888000,
        developerName: 'TikTok Pte. Ltd.',
      },
      name: 'TikTok',
      id: '018',
      type: 'app',
      status: 'NEW',
    },
    {
      metadata: {
        developerAddress:
          '1 Raffles Place #36-01 One Raffles Place Singapore 048616',
        lastupdationtime: 1693575888000,
        website: 'http://kwai.com',
        thumbnail:
          'https://lh3.googleusercontent.com/0Fmr2NQOStT_BG-MoBO_WOMlOYXwdiT0Rl_Fj4-XTj3a7tmm9R7gdrLoLYvJ5gN6d55hcaQcH9IZXoM_-sVZHjjVNG0G6jUvBgf7',
        screenshotUrls: [
          'https://lh3.googleusercontent.com/OT220hqAyW-zvAPq8latBdC6IjIllqJtrsc-m1s_9ClYPcSpQb4CwXHk9FF4U3oRr9J5Hgw1LMc_gLMw_O3JU_S7SKchT8Ot8yw',
          'https://lh3.googleusercontent.com/MrLjrieXRu2gxGqDzVReTJG2Qsh1CXtZMu0c4pOQtxE54XPXZdV4r9r2KY46Vu9Rw2GkNDF-aBw2P15vRnuJASDMC7iaX_60RoVRew',
          'https://lh3.googleusercontent.com/3ea4L5o82gduWG3c8ePY1qYmS5MAiDZkHkxSsGHS8LA8lZTJkBy5_Q5hF22XiyIiin64t5y8Aq7CFo9H6j0jwohYF2XmNtKbr34',
          'https://lh3.googleusercontent.com/pHynHh_6xRwpCzaT_QySqgfNwdMKYHJEx0LAOc4wqwZOXNGUchc1biZnf1uV7ZTCtShuF_t2exufnCEceMt-x-6MOLnnFRax3WR3',
          'https://lh3.googleusercontent.com/mh-QkMTCO80vQ0P9XVTeE9kWlgtQFbbF1C1W-bqy5NcfQmzB8-iIjtD0QJxKBEEJztHTCNfHGVWlbpNXkckAlkYXhbl4pinzHGmB',
        ],
        rating: 4.570835590362549,
        description:
          "WHAT IS KWAI? \nKwai is a social network for short videos and trends. Discover funny short videos. Contribute to the virtual community with recordings, videos of your life, playing daily challenges or likes the best memes and videos. Share your life with short videos and choose from dozens of magical effects and filters for them.\n\n🔥 TRENDS AND CHALLENGES!\nFind the best trends from around the Latin world with challenges, challenges, and competitions every day. Who will be the most most? Follow your favorite creators. Everything funny, fun and cool is here.\n\n🤹u200d SEE WHAT YOU LIKE MOST\nChoose your favorite content: Memes, Dance, Music, Humor, Blog, Beauty, Makeup, Fashion, Sports, Pets and much more. Find new friends who like the same content. Kwai is the best trending app and funny videos in Latin America.\n\n❤️ FOLLOW YOUR FAVORITE CREATORS\nThe best creators in Latin America are in Kwai. Make a Duet with your favorite creator. Download and save your videos to watch them when you are offline. Share videos on other platforms such as WhatsApp, Instagram, Twitter, Messenger among others.\n\n🎬 CREATE ORIGINAL CONTENT ON KWAI\nIn Kwai you can both watch and create videos. Become a creator by producing and uploading your own content to our community. These can be funny videos, music videos, or anything else you can think of. In other words, this is your space to shine and set trends, all while making extra money while having fun.\n\n🎥 NEW VIDEO EDITOR\nAll the trends in the palm of your hand! Create your masterpiece with Kwai MV. Choose photos from your device, add music or filters and upload your video in seconds. In addition, it finds functions of playback, dubbing, cutting, trimming and merging videos. Beautification tools and stickers to add flavor to your creations. In Kwai, it's easy and fun to create short videos to share your world.\n\n👻 THE BEST EFFECTS\nGet creative and have fun. Kwai has the best magic effects to use in your short videos.\n\n🤣 FOR LAUGHING\nHave a happy time watching short videos, memes and the most popular trends in the Latin world. The funniest are all in Kwai. Among the videos on the social network, there are all kinds of content to entertain you.\n\n🧑u200d🤝u200d🧑 JOIN THE COMMUNITY\nFind new friends and have fun with them. We have private messages. Enjoy the community and social network that has all the memes, trends and short videos that you could wish for.\nWhat are you waiting for!\n\nRecent changes:\nWeu2019re always making changes and improvements to Kwai. To make sure you donu2019t miss a thing, just keep your Updates turned on.\n1.Bug fixes ,stability fixes,and app optimizations",
        developerEmail: 'intl@kwai.com',
        shortDescription:
          'Enjoy popular videos and trendy music, share with friends!',
        version: '9.7.30.531904',
        fileLink:
          'https://storage.googleapis.com/hellomotodev/ramya_test/apks/019.com.kwai.video.apk',
        createdby: 'kthiru@motorola.com',
        lastupdatedby: 'kthiru@motorola.com',
        appBanner:
          'https://lh3.googleusercontent.com/XMIjpC2Pj3TqrAT9mc-gjyGHPqngbUREVTL5kSUPJIdQhYl_xMvl_UrVOqXtYtDPumLDRxqsHAsiIU1H8xlue1gR3T0ZSnLdIzT5',
        packageName: 'com.kwai.video',
        creationtime: 1693575888000,
        developerName: 'Joyo Technology Pte Ltd',
      },
      name: 'Kwai - Download & Share Video',
      id: '019',
      type: 'app',
      status: 'NEW',
    },
  ];
}
