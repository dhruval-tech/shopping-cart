import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store(){
    return <Row md={3} xs={1} lg={4} className="g-4">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item}/>
            </Col>
        ))}
    </Row>
}