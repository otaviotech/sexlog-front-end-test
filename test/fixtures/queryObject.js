export default class QueryObjectFixture {
  constructor() {
    this.parameters = {
      q: 'joao', // The search terms.
      sort: 'repositories', // followers | repositories | joined
      order: 'asc', // asc | desc
    };
    this.qualifiers = [
      {
        type: 'type', // user | org
        operator: '=',
        data: 'user',
      },
      {
        type: 'in',
        operator: '=',
        data: 'login', // login | fullname | email
      },
      {
        type: 'repos',
        operator: '>',
        data: '0', // numeric
      },

      {
        type: 'location',
        operator: '=',
        data: 'Brazil', // country name
      },
      {
        type: 'language',
        operator: '=',
        data: 'php', // programming language
      },
      {
        type: 'created',
        operator: '..', // numeric (date) > | < | = | >= | <= | ..* | *.. | ..
        data: ['2000-01-01', '2020-01-01'], // numeric (date)
      },
      {
        type: 'followers',
        operator: '..*', // numeric (date) > | < | = | >= | <= | ..* | *.. | ..
        data: '0', // numeric
      },
    ];
  }
}
