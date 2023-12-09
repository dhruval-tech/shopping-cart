import { Button, Card, CardBody, CardImg, CardTitle } from "react-bootstrap"
import { currencyFormatter } from "../utilities/currencyFormatter"
import { useState } from "react"
import { useShoppinCart } from "../context/shoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    Price: number
    ImgUrl: string
}
export function StoreItem({ id, name, Price, ImgUrl }: StoreItemProps) {
    const { getItemQuantity, increasedItemQuantity, decreasedgetItemQuantity, removeItemQuantity } = useShoppinCart()
    const quantity = getItemQuantity(id)
    return <Card className="h-100">
        <Card.Img variant="top" src={ImgUrl} height="200px"
            style={{ objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{currencyFormatter(Price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? <Button className="w-100" onClick={() => increasedItemQuantity(id)}>+ Add to Cart</Button> : <div className="d-flex align-items-center flex-column"
                style={{gap:".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:'.5rem'}}>
                        <Button onClick={() => decreasedgetItemQuantity(id)}>-</Button>
                        <div>
                            <span>{quantity}</span>
                        </div>in cart
                        <Button onClick={() => increasedItemQuantity(id)}>+</Button>
                    </div>
                    <Button variant="danger" size="sm" onClick={() => removeItemQuantity(id)}>Remove</Button>
                </div>}
            </div>
        </Card.Body>
    </Card>
}