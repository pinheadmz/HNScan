const { getAddress } = require("../api");

const { paginate } = require("../util/util.js");

async function addressHandler(request, h) {
  const hash = request.params.hash;
  let address;

  let limit = request.query.limit;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  try {
    address = await getAddress(hash, limit, offset);
  } catch (e) {
    console.error(e);
  }

  let pagination = paginate(address.totalTxs, limit, page, "address/" + hash);

  return h.view("address.pug", {
    address,
    pagination
  });
}

module.exports = addressHandler;
