class Formatter {
  constructor() {
    this.date = new Date();
  }

  format() {
    this.annualFormatter = new Intl.DateTimeFormat("ru", {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });

    this.dailyFormatter = new Intl.DateTimeFormat("ru", {
      hour: 'numeric',
      minute: 'numeric'
    });

    return `${this.dailyFormatter.format(this.date)} ${this.annualFormatter.format(this.date)}`;
  }
}

module.exports = Formatter;