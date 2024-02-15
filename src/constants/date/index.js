export const DATE_FORMAT_INTL_INPUTS = [
  {
    key: 'calendar',
    label: 'Calendar',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'parseDateTime'],
    options: [
      'buddhist',
      'chinese',
      'coptic',
      'dangi',
      'ethioaa',
      'ethiopic',
      'gregory',
      'hebrew',
      'indian',
      'islamic',
      'islamic-umalqura',
      'islamic-tbla',
      'islamic-civil',
      'islamic-rgsa',
      'iso8601',
      'japanese',
      'persian',
      'roc',
      'islamic-civil',
    ],
  },
  {
    key: 'numberingSystem',
    label: 'Numbering System',
    type: 'select',
    supportedUtilName: [
      'formatDate',
      'formatDateTime',
      'formatTime',
      'getRelativeTime',
      'parseDateTime',
    ],
    options: [
      'adlm',
      'ahom',
      'arab',
      'arabext',
      'armn',
      'armnlow',
      'bali',
      'beng',
      'bhks',
      'brah',
      'cakm',
      'cham',
      'cyril',
      'deva',
      'ethi',
      'finance',
      'fullwide',
      'geor',
      'gong',
      'gonm',
      'grek',
      'greklow',
      'gujr',
      'guru',
      'hanidays',
      'hanidec',
      'hans',
      'hansfin',
      'hant',
      'hantfin',
      'hebr',
      'hmng',
      'hmnp',
      'java',
      'jpan',
      'jpanfin',
      'jpanyear',
      'kali',
      'khmr',
      'knda',
      'lana',
      'lanatham',
      'laoo',
      'latn',
      'lepc',
      'limb',
      'mathbold',
      'mathdbl',
      'mathmono',
      'mathsanb',
      'mathsans',
      'mlym',
      'modi',
      'mong',
      'mroo',
      'mtei',
      'mymr',
      'mymrshan',
      'mymrtlbg',
      'native',
      'newa',
      'nkoo',
      'olck',
      'orya',
      'osma',
      'rohg',
      'roman',
      'romanlow',
      'saur',
      'shrd',
      'sind',
      'sinh',
      'sora',
      'sund',
      'takr',
      'talu',
      'taml',
      'tamldec',
      'telu',
      'thai',
      'tirh',
      'tibt',
      'traditio',
      'vaii',
      'wara',
      'wcho',
    ],
  },
  {
    key: 'hourCycle',
    label: 'Hour Cycle',
    type: 'select',
    supportedUtilName: ['formatDateTime', 'formatTime'],
    options: ['h12', 'h24'],
  },
  {
    key: 'weekday',
    label: 'Weekday',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['long', 'short', 'narrow'],
  },
  {
    key: 'year',
    label: 'Year',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['numeric', '2-digit'],
  },
  {
    key: 'month',
    label: 'Month',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['numeric', '2-digit', 'long', 'short', 'narrow'],
  },
  {
    key: 'day',
    label: 'Day',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['numeric', '2-digit'],
  },
  {
    key: 'dayPeriod',
    label: 'Day Period',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['narrow', 'short', 'long'],
  },
  {
    key: 'hour',
    label: 'Hour',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['numeric', '2-digit'],
  },
  {
    key: 'minute',
    label: 'Minute',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['numeric', '2-digit'],
  },
  {
    key: 'second',
    label: 'Second',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['numeric', '2-digit'],
  },
  {
    key: 'fractionalSecondDigits',
    label: 'Fractional Second Digits',
    options: [1, 2, 3],
    supportedUtilName: ['formatDateTime', 'formatTime', 'parseDateTime'],
    type: 'select',
  },
  {
    key: 'timeZoneName',
    label: 'Timezone Name',
    type: 'select',
    supportedUtilName: ['formatDate', 'formatDateTime', 'formatTime', 'parseDateTime'],
    options: ['long', 'short'],
  },
  {
    key: 'dateStyle',
    label: 'Date Style',
    type: 'select',
    supportedUtilName: ['parseDateTime'],
    options: ['full', 'long', 'medium', 'short'],
  },
  {
    key: 'timeStyle',
    label: 'Time Style',
    type: 'select',
    supportedUtilName: ['parseDateTime'],
    options: ['full', 'long', 'medium', 'short'],
  },
];
