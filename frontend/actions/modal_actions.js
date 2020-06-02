export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const modelOpen = modal => ({
    type: MODAL_OPEN,
    modal
});

export const modelClose = () => ({
    type: MODAL_CLOSE
})
