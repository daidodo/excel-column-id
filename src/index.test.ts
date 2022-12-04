/* eslint jest/expect-expect: "off" */

import generateId from './';

function check(index: number, length: number, expected: string[]) {
  const actual = Array<string>();
  for (let i = 0; i < length; i += 1) actual.push(generateId(index + i));
  console.log(actual);
  expect(actual).toStrictEqual(expected);
}

describe('generateId', () => {
  describe('A-Z', () => {
    it('should pass the test', () => {
      check(0, 26, [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ]);
    });
  });
  describe('AA-AZ', () => {
    it('should pass the test', () => {
      check(26 * 1, 26, [
        'AA',
        'AB',
        'AC',
        'AD',
        'AE',
        'AF',
        'AG',
        'AH',
        'AI',
        'AJ',
        'AK',
        'AL',
        'AM',
        'AN',
        'AO',
        'AP',
        'AQ',
        'AR',
        'AS',
        'AT',
        'AU',
        'AV',
        'AW',
        'AX',
        'AY',
        'AZ',
      ]);
    });
  });
  describe('BA-BZ', () => {
    it('should pass the test', () => {
      check(26 * 2, 26, [
        'BA',
        'BB',
        'BC',
        'BD',
        'BE',
        'BF',
        'BG',
        'BH',
        'BI',
        'BJ',
        'BK',
        'BL',
        'BM',
        'BN',
        'BO',
        'BP',
        'BQ',
        'BR',
        'BS',
        'BT',
        'BU',
        'BV',
        'BW',
        'BX',
        'BY',
        'BZ',
      ]);
    });
  });
  describe('ZA-ZZ', () => {
    it('should pass the test', () => {
      check(26 * 26, 26, [
        'ZA',
        'ZB',
        'ZC',
        'ZD',
        'ZE',
        'ZF',
        'ZG',
        'ZH',
        'ZI',
        'ZJ',
        'ZK',
        'ZL',
        'ZM',
        'ZN',
        'ZO',
        'ZP',
        'ZQ',
        'ZR',
        'ZS',
        'ZT',
        'ZU',
        'ZV',
        'ZW',
        'ZX',
        'ZY',
        'ZZ',
      ]);
    });
  });
  describe('AAA-AAZ', () => {
    it('should pass the test', () => {
      check(26 * (26 + 1), 26, [
        'AAA',
        'AAB',
        'AAC',
        'AAD',
        'AAE',
        'AAF',
        'AAG',
        'AAH',
        'AAI',
        'AAJ',
        'AAK',
        'AAL',
        'AAM',
        'AAN',
        'AAO',
        'AAP',
        'AAQ',
        'AAR',
        'AAS',
        'AAT',
        'AAU',
        'AAV',
        'AAW',
        'AAX',
        'AAY',
        'AAZ',
      ]);
    });
  });
  describe('ABA-ABZ', () => {
    it('should pass the test', () => {
      check(26 * (26 + 2), 26, [
        'ABA',
        'ABB',
        'ABC',
        'ABD',
        'ABE',
        'ABF',
        'ABG',
        'ABH',
        'ABI',
        'ABJ',
        'ABK',
        'ABL',
        'ABM',
        'ABN',
        'ABO',
        'ABP',
        'ABQ',
        'ABR',
        'ABS',
        'ABT',
        'ABU',
        'ABV',
        'ABW',
        'ABX',
        'ABY',
        'ABZ',
      ]);
    });
  });
  describe('AZA-AZZ', () => {
    it('should pass the test', () => {
      check(26 * (26 + 26), 26, [
        'AZA',
        'AZB',
        'AZC',
        'AZD',
        'AZE',
        'AZF',
        'AZG',
        'AZH',
        'AZI',
        'AZJ',
        'AZK',
        'AZL',
        'AZM',
        'AZN',
        'AZO',
        'AZP',
        'AZQ',
        'AZR',
        'AZS',
        'AZT',
        'AZU',
        'AZV',
        'AZW',
        'AZX',
        'AZY',
        'AZZ',
      ]);
    });
  });
  describe('BAA-BAZ', () => {
    it('should pass the test', () => {
      check(26 * (26 * 2 + 1), 26, [
        'BAA',
        'BAB',
        'BAC',
        'BAD',
        'BAE',
        'BAF',
        'BAG',
        'BAH',
        'BAI',
        'BAJ',
        'BAK',
        'BAL',
        'BAM',
        'BAN',
        'BAO',
        'BAP',
        'BAQ',
        'BAR',
        'BAS',
        'BAT',
        'BAU',
        'BAV',
        'BAW',
        'BAX',
        'BAY',
        'BAZ',
      ]);
    });
  });
  describe('BZA-BZZ', () => {
    it('should pass the test', () => {
      check(26 * (26 * 2 + 26), 26, [
        'BZA',
        'BZB',
        'BZC',
        'BZD',
        'BZE',
        'BZF',
        'BZG',
        'BZH',
        'BZI',
        'BZJ',
        'BZK',
        'BZL',
        'BZM',
        'BZN',
        'BZO',
        'BZP',
        'BZQ',
        'BZR',
        'BZS',
        'BZT',
        'BZU',
        'BZV',
        'BZW',
        'BZX',
        'BZY',
        'BZZ',
      ]);
    });
  });
  describe('ZAA-ZAZ', () => {
    it('should pass the test', () => {
      check(26 * (26 * 26 + 1), 26, [
        'ZAA',
        'ZAB',
        'ZAC',
        'ZAD',
        'ZAE',
        'ZAF',
        'ZAG',
        'ZAH',
        'ZAI',
        'ZAJ',
        'ZAK',
        'ZAL',
        'ZAM',
        'ZAN',
        'ZAO',
        'ZAP',
        'ZAQ',
        'ZAR',
        'ZAS',
        'ZAT',
        'ZAU',
        'ZAV',
        'ZAW',
        'ZAX',
        'ZAY',
        'ZAZ',
      ]);
    });
  });
  describe('ZZA-ZZZ', () => {
    it('should pass the test', () => {
      check(26 * (26 * 26 + 26), 26, [
        'ZZA',
        'ZZB',
        'ZZC',
        'ZZD',
        'ZZE',
        'ZZF',
        'ZZG',
        'ZZH',
        'ZZI',
        'ZZJ',
        'ZZK',
        'ZZL',
        'ZZM',
        'ZZN',
        'ZZO',
        'ZZP',
        'ZZQ',
        'ZZR',
        'ZZS',
        'ZZT',
        'ZZU',
        'ZZV',
        'ZZW',
        'ZZX',
        'ZZY',
        'ZZZ',
      ]);
    });
  });
  describe('AAAA-AAAZ', () => {
    it('should pass the test', () => {
      check(26 * (26 * (26 + 1) + 1), 26, [
        'AAAA',
        'AAAB',
        'AAAC',
        'AAAD',
        'AAAE',
        'AAAF',
        'AAAG',
        'AAAH',
        'AAAI',
        'AAAJ',
        'AAAK',
        'AAAL',
        'AAAM',
        'AAAN',
        'AAAO',
        'AAAP',
        'AAAQ',
        'AAAR',
        'AAAS',
        'AAAT',
        'AAAU',
        'AAAV',
        'AAAW',
        'AAAX',
        'AAAY',
        'AAAZ',
      ]);
    });
  });
  describe('AABA-AABZ', () => {
    it('should pass the test', () => {
      check(26 * (26 * (26 + 1) + 2), 26, [
        'AABA',
        'AABB',
        'AABC',
        'AABD',
        'AABE',
        'AABF',
        'AABG',
        'AABH',
        'AABI',
        'AABJ',
        'AABK',
        'AABL',
        'AABM',
        'AABN',
        'AABO',
        'AABP',
        'AABQ',
        'AABR',
        'AABS',
        'AABT',
        'AABU',
        'AABV',
        'AABW',
        'AABX',
        'AABY',
        'AABZ',
      ]);
    });
  });
  describe('ABAA-ABAZ', () => {
    it('should pass the test', () => {
      check(26 * (26 * (26 + 2) + 1), 26, [
        'ABAA',
        'ABAB',
        'ABAC',
        'ABAD',
        'ABAE',
        'ABAF',
        'ABAG',
        'ABAH',
        'ABAI',
        'ABAJ',
        'ABAK',
        'ABAL',
        'ABAM',
        'ABAN',
        'ABAO',
        'ABAP',
        'ABAQ',
        'ABAR',
        'ABAS',
        'ABAT',
        'ABAU',
        'ABAV',
        'ABAW',
        'ABAX',
        'ABAY',
        'ABAZ',
      ]);
    });
  });
});
