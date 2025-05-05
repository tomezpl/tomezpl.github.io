export function animOrder<Order extends number = 0>(order: Order = (0 as Order)) {
    return {style: {'--anim-order': `${order}`}} as const;
}

