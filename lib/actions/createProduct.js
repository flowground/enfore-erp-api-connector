/**
 * Auto-generated action file for "enfore ERP API" API.
 *
 * Generated at: 2019-12-11T08:46:33.770Z
 * Mass generator version: 1.0.0
 *
 * flowground :- Telekom iPaaS / enfore-erp-api-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'createProduct'
 * Endpoint Path: '/org/{org-id}/products'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "org-id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "org_id": "org-id",
    "id": "id",
    "name": "name",
    "external_id": "external_id",
    "article_id": "article_id",
    "escrow_supplier": "escrow_supplier",
    "management_unit": "management_unit",
    "value": "value",
    "unit": "unit",
    "price": "price",
    "price_is_gross": "price_is_gross",
    "quantity": "quantity",
    "sales_price_and_quantity": "sales_price_and_quantity",
    "block_sales": "block_sales",
    "exclude_from_discounts": "exclude_from_discounts",
    "product_identifiers": "product_identifiers",
    "tax_category": "tax_category",
    "tax_exemption_reason": "tax_exemption_reason",
    "provider_id": "provider_id",
    "configure_lineitem_start_url": "configure_lineitem_start_url",
    "assemble_product_start_url": "assemble_product_start_url",
    "cancel_lineitem_start_url": "cancel_lineitem_start_url",
    "refund_lineitem_start_url": "refund_lineitem_start_url",
    "custom_workflow_config": "custom_workflow_config",
    "sales_category": "sales_category",
    "track_inventory": "track_inventory",
    "manufacturer": "manufacturer",
    "require_lot_for_sales_fulfillment": "require_lot_for_sales_fulfillment",
    "lot_configuration": "lot_configuration",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'createProduct',
        pathName: '/org/{org-id}/products',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}