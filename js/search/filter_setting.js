/**
 * Created by marat on 21.01.2016.
 */
//<![CDATA[

var ClientIDs = {};;
var searchForm;
FastInit.addOnLoad(function() {
    searchForm = function() {
        return new SearchForm.SearchForm($j('.mui-searchbox'), {
            flights: {
                "Segments": [{
                    "Origin": "",
                    "Destination": "",
                    "Depart": "2015-07-29T00:00:00+00:00"
                }, {
                    "Origin": "",
                    "Destination": "",
                    "Depart": "2015-08-03T00:00:00+00:00"
                }],
                "AdultCount": 1,
                "ChildAges": [],
                "IncludeNearby": false,
                "DirectOnly": false,
                "TicketClass": "ECO",
                "TripType": 2,
                "SearchBasePath": "/flightsearch/",
                "SearchBehavior": 0,
                "CookieTimestamp": "0001-01-01T00:00:00+00:00"
            },
            hotels: {
                "CheckIn": "2015-07-21T00:00:00",
                "CheckOut": "2015-07-26T00:00:00",
                "Today": "2015-07-14T00:00:00",
                "Location": {
                    "Key": null,
                    "Name": null,
                    "Country": null,
                    "CountryCode": null,
                    "DisplayName": null,
                    "Parent": null,
                    "HotelCount": 0,
                    "Overview": false
                },
                "Rooms": [{
                    "AdultCount": 2,
                    "ChildAges": []
                }],
                "StartSearch": false,
                "AnyTime": false,
                "BaseURLs": [{
                    "Name": "MultipleHotelSearch",
                    "Path": "#"
                }, {
                    "Name": "SingleHotelSearch",
                    "Path": "#"
                }],
                "SearchBehavior": 0,
                "CookieTimestamp": null,
                "Version": "9"
            },
            cars: {
                "PickupLocation": {
                    "Id": -1,
                    "Name": "",
                    "CountryCode": "",
                    "StateName": "",
                    "IataCode": "",
                    "CountryName": ""
                },
                "DropoffLocation": {
                    "Id": -1,
                    "Name": "",
                    "CountryCode": "",
                    "StateName": "",
                    "IataCode": "",
                    "CountryName": ""
                },
                "driverAge": 30,
                "ResidenceCode": "DK",
                "SearchBasePath": "#",
                "SearchBehavior": 0,
                "PickupDate": "2015-07-21T10:00:00",
                "DropoffDate": "2015-07-26T10:00:00",
                "CookieTimestamp": null
            }
        }, {
            activeForm: 'flights',
            currencyCode: 'RUB'
        });
    }
});;
FastInit.addOnLoad(function() {
    searchForm = searchForm();
});
Tracking.momondo_tracking_enabled = true;
Tracking.google_analytics_tracking_enabled = true;
Tracking.unica_tracking_enabled = false;
Tracking.ijento_tracking_enabled = true;
var $mm = mm = {
    pathPrefix: '',
    imagePath: '#',
    nsImagePath: '#',
    logoPath: '#',
    isTestServer: false,
    'CDN': {
        assetsBaseUrl: '#',
        staticBaseUrl: '#',
        imageBaseUrl: '#',
        nonStaticBaseUrl: '#',
        logoBaseUrl: '#'
    }
};
var whitelabel = false,
    currentLanguage = 'ru',
    currentCulture = 'ru-RU',
    ipCountry = 'RU',
    isAnonymous = true,
    isAdministrator = false,
    userId = 2101,
    userName = 'monica',
    userUrl = '/members/anonymous/',
    userImageUrl = '#',
    userFacebookId = '',
    facebookApId = '269187976434064',
    showads = true;
var MomondoInfo = {
    'CultureInfo': {
        'CurrentCulture': {
            'Code': 'ru-RU',
            'numberFormat': {
                'decimalSeparator': ",",
                'groupSeparator': " "
            },
            'dateTimeFormat': {
                'FirstDayOfWeek': 1,
                'DayNames': ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                'ShortestDayNames': ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                'MonthNames': ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
                'MonthNamesGenitive': ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря", ""],
                'AbbreviatedMonthNames': ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек", ""]
            },
            LongDatePattern: "d MMMM yyyy \u0027г.\u0027",
            ShortDatePattern: "dd.MM.yyyy"
        }
    },
    'SpeedFaresKey': ''
};
var MomondoStyles = ['global.font.1251.less', 'page.home.less', 'global.cms.less', 'global.body.v8.less', 'global.button.less', 'global.flags.less', 'global.inputs.v8.less', 'global.momicons.less', 'global.popup.less', 'global.blobshow.less', 'jquery.nanoscroller.css', 'global.header.less', 'section.front.main.less', 'control.searchbox.less', 'section.global.ksp.less', 'section.tripfinder.less', 'control.goexplore.resultbox.less', 'control.goexplore.otherdestinations.less', 'section.front.tripfinder.teaser.less', 'section.global.app-promo.less', 'global.footer.less', 'tod_email_signup.css', 'global.popup.newsletter.less'];
var MomondoScripts = ['fastinit.js', 'common.js', 'Cookies.js', 'controls/dialog.js', '/LoaderWS.asmx/js', 'controls/currency.js', '/MomondoTrackingWS.asmx/js', 'FixWS.js', 'CommonBottom.js'];
window.onunload = function() {
    $$('button').invoke('writeAttribute', 'disabled', 'disabled');
};
if (typeof Language != 'object') Language = {};
Language['AlertDialog_Alert'] = 'Уведомление';
Language['AlertDialog_Confirm'] = 'Подтведить';
Language['AlertDialog_Okay'] = 'ОК';
Language['AlertDialog_Cancel'] = 'Отмена';
Language['AlertDialog_Information'] = 'Информация';
Language['CityGuide_Category_sleep'] = 'Отели';
Language['CityGuide_Category_eat'] = 'Рестораны, фастфуды';
Language['CityGuide_Category_see'] = 'Достопримечательности';
Language['CityGuide_Category_shop'] = 'Шоппинг';
Language['CityGuide_Category_night'] = 'Ночная жизнь';
Language['CityGuide_Category_coffee'] = 'Кафе';
Language['CityGuide_Category_transport'] = 'Транспорт';
Language['CityGuide_Category_culture'] = 'Культура';
Language['Tod_MapItems_Stars'] = '{0} звезд';
Language['MapItem_Loading'] = 'Загрузка информации - пожалуйста, подождите...';
Language['RelativeDate_DaysAgo'] = '{0} дней назад';
Language['RelativeDate_DayAgo'] = '1 день назад';
Language['RelativeDate_HoursAgo'] = '{0} часов назад';
Language['RelativeDate_HourAgo'] = '1 час назад';
Language['RelativeDate_MinutesAgo'] = '{0} минут назад';
Language['RelativeDate_MinuteAgo'] = '1 минуту назад';
Language['RelativeDate_MomentsAgo'] = 'несколько секунд назад';
Language['general_close'] = 'закрыть';
Language['General.Location.Country'] = 'Страна';
Language['toolbar_language'] = 'Язык';
Language['toolbar_currency'] = 'Валюта';
Language['User_JS_Cancel'] = 'Отмена';
Language['General.Cancel'] = 'Закрыть';
Language['General.OK'] = 'OK';
Language['General.Calendar.Done'] = 'Готово';
Language['General.Calendar.Previous'] = 'Назад';
Language['General.Calendar.Next'] = 'Вперед';
Language['General.Calendar.Today'] = 'Сегодня';
Language['General.Calendar.Week'] = 'Нед';
Language['HotelSearchForm.InvalidDate'] = 'Неверная дата';
Language['HotelSearchForm.InvalidPeriod.TooLong'] = 'Период пребывания в отеле должен быть не более 30 ночей';
Language['HotelSearchForm.InvalidRoom.SpecifyAdult'] = 'You must select at least 1 adult to search';
Language['HotelSearchForm.InvalidCity'] = 'Неверный город';
Language['HotelSearchForm.SameDestination'] = 'Куда вы хотите отправиться?';
Language['CarSearchForm.TypePickupCity'] = 'Укажите город или аэропорт';
Language['CarSearchForm.TypeDropoffCity'] = 'Укажите место возврата авто';
Language['CarSearchForm.DropoffLocationToggle'] = 'Вернуть в другом месте';
Language['CarSearchForm.PickupDate'] = 'Дата начала';
Language['CarSearchForm.DropoffDate'] = 'Дата окончания';
Language['CarSearchForm.Residence'] = 'Страна проживания';
Language['CarSearchForm.Search'] = 'Поиск автомобилей';
Language['CarSearchForm.Error.TypePickupCity'] = 'Проверьте выделенные поля';
Language['CarSearchForm.Error.PickupDropOffSame'] = 'Выбрать более позднее время возврата';
Language['SearchForm.Flight.Watermark.Origin'] = 'Откуда?';
Language['SearchForm.Flight.Watermark.Destination'] = 'Куда?';
Language['HotelSearchForm.CityCompleter.Watermark'] = 'Введите город, регион или район';
Language['SearchForm.Hotel.Guests.Title'] = 'Проживание детей в том же номере или необходимо забронировать еще один?';
Language['General.Pax.Passenger.zero'] = '{0} пассажиров';
Language['General.Pax.Passenger.one'] = '{0} пассажир';
Language['General.Pax.Passenger.two'] = '{0} пассажира';
Language['General.Pax.Passenger.few'] = '{0} пассажира';
Language['General.Pax.Passenger.many'] = '{0} пассажиров';
Language['General.Pax.Passenger.other'] = '{0} пассажиров';
Language['General.Pax.AgeOfChild'] = 'Возраст {0}-го ребенка';
Language['General.Adults'] = 'Взрослые';
Language['General.Rooms'] = 'Номера';
Language['General.Room'] = 'Номер';
Language['General.Children'] = 'Ребенок до 12лет';
Language['MailPrice_ValidationSummaryMailPrice.HeaderText'] = 'Пожалуйста, исправьте следующие ошибки:';
Language['HotelSearchForm.AddRoom'] = 'Добавить другой номер';
Language['HotelSearchForm.AgeOfChildren'] = 'Возраст детей';
Language['General.Pax.Adult.zero'] = '{0} взрослых';
Language['General.Pax.Adult.one'] = '{0} взрослых';
Language['General.Pax.Adult.two'] = '{0} взрослых';
Language['General.Pax.Adult.few'] = '{0} взрослых';
Language['General.Pax.Adult.many'] = '{0} взрослых';
Language['General.Pax.Adult.other'] = '{0} взрослых';
Language['General.Pax.Child.zero'] = '{0} детей';
Language['General.Pax.Child.one'] = '{0} ребенок';
Language['General.Pax.Child.two'] = '{0} детей';
Language['General.Pax.Child.few'] = '{0} детей';
Language['General.Pax.Child.many'] = '{0} детей';
Language['General.Pax.Child.other'] = '{0} детей';
Language['General.Pax.PaxInRoom.zero'] = '{0} в {1} номерах';
Language['General.Pax.PaxInRoom.one'] = '{0} в {1} номере';
Language['General.Pax.PaxInRoom.two'] = '{0} в {1} номерах';
Language['General.Pax.PaxInRoom.few'] = '{0} в {1} номерах';
Language['General.Pax.PaxInRoom.many'] = '{0} в {1} номерах';
Language['General.Pax.PaxInRoom.other'] = '{0} в {1} номерах';
addScriptToDOM.defer('//cdn2.momondo.net/js-5/c/js/js_563164d8_min_9.11.0.js');
//]]>