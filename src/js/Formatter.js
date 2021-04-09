class Formatter {
  constructor() {
    this.date = new Date();
  }

  format(date) {
    date = date ? date : new Date();
    this.annualFormatter = new Intl.DateTimeFormat("ru", {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });

    this.dailyFormatter = new Intl.DateTimeFormat("ru", {
      hour: 'numeric',
      minute: 'numeric'
    });

    return `${this.dailyFormatter.format(date)} ${this.annualFormatter.format(date)}`;
  }
}

module.exports = Formatter;