// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import city from './city'
import cityType from './cityType'
import discover from './discover'
import discoverImageType from './discoverImageType'
import homeBottomBanner from './homeBottomBanner'
import homeHero from './homeHero'
import homeNews from './homeNews'
import host from './host'
import person from './person'
import property from './property'
import propertyImages from './propertyImages'
import review from './review'
import traveller from './traveller'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    homeNews,
    homeHero,
    city,
    cityType,
    discover,
    discoverImageType,
    homeBottomBanner,
    property,
    propertyImages,
    person,
    host,
    review,
    traveller,
  ]),
})
