import type {QueryRunner} from '~/io/apis'
import DataQuery from './data.gql?raw'

export function readData(send: QueryRunner) {
    return send<Queries.DataQuery>(DataQuery)
}
