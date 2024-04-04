import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {

	 const {count} = state;

	 const Increment = () => {
		updateState({count: count + 1});

	 }

	 const Decrement = () => {	
		updateState({count: count - 1});
	 }
	 const Clear = () => {
		updateState({count: 0});
	 }

      

	return (
		/*<div className='card'>
          <slot/>		  
		</div>*/

		<div className='container'>
			<h2>Click Counter</h2>
			<span>
				<button
					type="button"
					on-click={Increment}>
					Increment
				</button>
			</span>
			<span>
				<button type="button" on-click={Decrement}>
					Decrement
				</button>
			</span>

			<span>
				<button type="button" on-click={Clear}>
					Clear
				</button>
			</span>
        
       <p>Value:{count}</p>

		</div>
	);
};
createCustomElement('x-731823-counter', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		/* Add initial state properties here */
		count: 0

	},
	
	styles
});
