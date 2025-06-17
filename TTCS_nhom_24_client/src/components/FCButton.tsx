export const FCButton = (props: {
	text?: string,
	className?: string,
	style?: any,
	disabled?: boolean,
	handleAction?: () => void
}) => {
	const { text, className,  handleAction, style, disabled = false } = props;
	return (
		<button
			className={className}
			onClick={handleAction}
			style={{ ...style, textTransform: 'none' }}
			disabled={disabled || false}
		>
			{text}
		</button>
	)
}
