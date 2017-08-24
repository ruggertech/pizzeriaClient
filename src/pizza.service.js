class PizzaService {
  getPizzaList() {
    const options = {
      method:             'GET',
      url:                'http://localhost:3004/pizzas',
      responseType:       "JSON",
      returnFullResponse: true
    };

    return fetch(options.url, options).then(res => {
      return PizzaService.getResponseBody(res, true).then(body => {
        return body;
      });
    }).catch(function() {
      console.log("Booo");
    });
  }

  placeOrder(orderDetails) {
    const body = {
      "timeToDeliverInMinutes": Math.random() * (60 - 5) + 5,
      "orderDetails":           orderDetails
    };

    const options = {
      method:              'POST',
      url:                 'http://localhost:3004/orders',
      responseType:        "JSON",
      header: {
        contentType: "application/json"
      },
      body: JSON.stringify(body),
      returnFullResponse:  true,
    };

    return fetch(options.url, options, options.responseType, true).then(res => {
      return PizzaService.getResponseBody(res, true).then(body => {
        return body;
      });
    }).catch(function() {
      console.log("Booo");
    });
  }

  static getResponseBody(response, parseToJson) {
    return response.text().then((text) => {

      if (!parseToJson) {
        return text;
      }

      let json = {};
      if (text) {
        try {
          json = JSON.parse(text);
        } catch (e) {
          console.error("FetchService.handleResponse: could not parse response ", text, "as json ", e);
        }
      }

      return json;
    });
  }
}

export default new PizzaService();
