import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { service } from './service'
import { stat } from './stat'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, service, stat],
}
