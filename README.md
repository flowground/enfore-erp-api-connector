# ![LOGO](logo.png) enfore ERP API **flow**ground Connector

## Description

A generated **flow**ground connector for the enfore ERP API API (version 0.5.10).

Generated from: http://localhost<br/>
Generated at: 2019-12-11T10:46:33+02:00

## API Description

enfore API for managing products, invoices and credit memos<br/>

## Authorization

This API does not require authorization.

## Actions

### Load the list of all products

*Tags:* `Products`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>

### Add a new product to the organisation

*Tags:* `Products`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Get the mappings of internal to external IDs for products.

*Tags:* `Products: External ID Mapping`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Upsert the mappings from internal to external IDs for products

*Tags:* `Products: External ID Mapping`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Get the mapping of internal to external IDs for products.

*Tags:* `Products: External ID Mapping`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `external-id` - _required_ - External ID for which an internal ID should be returned.<br/>

### Load a product by its identifier

*Tags:* `Products`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>

### Full update of a product

*Tags:* `Products`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>

### Delete a product by its identifier

*Tags:* `Products`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>

### Load all sales channel-specific information of a product identified by its ID

*Tags:* `Products: Sales Channels`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>

### Create a product's relation to a sales channel

*Tags:* `Products: Sales Channels`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>

### Load product sales channel information by ID

*Tags:* `Products: Sales Channels`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>
* `product-sales-channel-information-id` - _required_ - ID of the product's sales channel information<br/>

### Update a product's relation to a sales channel

*Tags:* `Products: Sales Channels`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>
* `product-sales-channel-information-id` - _required_ - ID of the product's sales channel information<br/>

### Remove a product from a sales channel.

*Tags:* `Products: Sales Channels`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>
* `product-sales-channel-information-id` - _required_ - ID of the product's sales channel information<br/>

### Load all tags of a product identified by its ID

*Tags:* `Products: Tags`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>

### Add a tag to a product identified by its ID. If the tag is not already in the system, it will be created.

*Tags:* `Products: Tags`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>

### Delete a tag with given tag-id from a product identified by its product-id

*Tags:* `Products: Tags`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product to load, create or update<br/>
* `tag-id` - _required_ - ID of the tag to delete<br/>

### Load a product by its external ID

*Tags:* `Products: External ID Mapping`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `external-id` - _required_ - External ID of the product to load, create or update<br/>

### Update or create a product addressed by its external ID

*Tags:* `Products: External ID Mapping`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `external-id` - _required_ - External ID of the product to load, create or update<br/>

### Returns IDs of all the images that are attached to this product

*Tags:* `Products: Images`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product that is the subject of the request<br/>

### Add a new image to the product.
> This method appends a new image to the list of images that are attached<br/>
> to a given product.<br/>
> Note that every time you add an image, it is appended to the front of the list such that<br/>
> it becomes the default image.<br/>
> Note that at the moment only JPEG and PNG images are supported. A request size restriction may also be imposed by the gateway. Typically, the gateway limits requests over 12 Megabytes.<br/>

*Tags:* `Products: Images`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product that is the subject of the request<br/>

### Delete an image by it's identifier on a given product

*Tags:* `Products: Images`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-id` - _required_ - ID of the product that is the subject of the request<br/>
* `image-id` - _required_ - ID of the image that needs to be deleted<br/>

### Query lots

*Tags:* `Lots`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>
* `product_id` - _optional_ - When specified, only lots for the specified product are returned.<br/>
* `number` - _optional_ - When specified, only lots with the specified number are returned.<br/>

### Add a new lot

*Tags:* `Lots`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Load a lot by its identifier

*Tags:* `Lots`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `lot-id` - _required_ - ID of the lot to load, create or update<br/>

### Update the status of a lot

*Tags:* `Lots`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `lot-id` - _required_ - ID of the lot to load, create or update<br/>

### Load storage location-specific information of a lot identified by its ID

*Tags:* `Lots`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `lot-id` - _required_ - ID of the lot to load, create or update<br/>

### Create a lot's relation to a storage location

*Tags:* `Lots`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `lot-id` - _required_ - ID of the lot to load, create or update<br/>

### Remove the relation between a lot and a storage location.

*Tags:* `Lots`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `lot-id` - _required_ - ID of the lot to load, create or update<br/>
* `lot-storage-location-information-id` - _required_ - ID of the lot/storage location relation info<br/>

### Get a list with all sales categories sorted by their names.

*Tags:* `Sales Categories`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>
* `is_active` - _optional_ - When specified, either active or inactive (deleted) sales categories are returned.<br/>

### Create a new sales category

*Tags:* `Sales Categories`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Returns invoices
> Returns invoices for the specified interval, sorted in ascending order by transaction date and time.<br/>
> <br><br><br/>
> <strong><br/>
> Since our platform was built as a distributed system, we are subject to the laws of the "Eventual consistency" model. This means that time periods close to the present may be unstable and could contain new items if the same time interval is queried again.<br/>
> <br><br><br/>
> We therefore recommend that intervals that are close to the present time should be re-requested and verified at a later time.<br/>
> </strong><br/>

*Tags:* `Invoices`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `from` - _required_ - Defines the time starting from which objects are to be returned.<br/>
Objects with exactly this date are also returned - this means that the start of a left-closed interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `to` - _required_ - Defines the time up to which objects are to be returned.<br/>
Objects with exactly this date are not returned - this means that the end of a right-open interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>

### Get a list of registered consumers for invoice events.
> Retrieve all currently active event subscriptions.<br/>

*Tags:* `Invoices`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Register an event consumer with the API.
> If the callback URL is already registered, we return the original subscription ID.<br/>
> We will continue attempting to send new items to registered subscriptions until they are deleted.<br/>
> In case we cannot reach the endpoint, we will apply an exponential backoff.<br/>

*Tags:* `Invoices`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Delete a subscription for invoices

*Tags:* `Invoices`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `subscription-id` - _required_ - ID of the subscription to delete<br/>

### Returns credit-memos
> Returns credit memos for the specified interval, sorted in ascending order by transaction date and time.<br/>

*Tags:* `Credit Memos`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `from` - _required_ - Defines the time starting from which objects are to be returned.<br/>
Objects with exactly this date are also returned - this means that the start of a left-closed interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `to` - _required_ - Defines the time up to which objects are to be returned.<br/>
Objects with exactly this date are not returned - this means that the end of a right-open interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>

### Get a list of registered consumers for credit memo events.
> Retrieve all currently active event subscriptions.<br/>

*Tags:* `Credit Memos`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Register an event consumer with the API.
> If the callback URL is already registered, we return the original subscription ID.<br/>
> We will continue attempting to send new items to registered subscriptions until they are deleted.<br/>
> In case we cannot reach the endpoint, we will apply an exponential backoff.<br/>

*Tags:* `Credit Memos`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Delete a subscription for credit memos

*Tags:* `Credit Memos`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `subscription-id` - _required_ - ID of the subscription to delete<br/>

### Export account information in DATEV Format
> Returns the exported content in DATEV format to the given contact's email address<br/>

*Tags:* `DATEV Export`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `from` - _required_ - Defines the time starting from which objects are to be returned.<br/>
Objects with exactly this date are also returned - this means that the start of a left-closed interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `to` - _required_ - Defines the time up to which objects are to be returned.<br/>
Objects with exactly this date are not returned - this means that the end of a right-open interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `contact_id` - _required_ - IndividualContact Identifier who will receive the exported content by email<br/>

## License

**flow**ground :- Telekom iPaaS / enfore-erp-api-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
