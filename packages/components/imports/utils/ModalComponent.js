import { Meteor } from 'meteor/meteor';
import { BlazeComponent } from 'meteor/peerlibrary:blaze-components';
import './ModalComponent.html';

class ModalComponent extends BlazeComponent {
	onRendered() {
		super.onRendered();
		
		// Material
		this.$('.modal-trigger').leanModal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: 0.5, // Opacity of modal background
			in_duration: 500, // Transition in duration
			out_duration: 200, // Transition out duration
			ready: function () {}, // Callback for Modal open
			starting_top: '4%',
			ending_top: '10%',
			complete: function () {
				$('.lean-overlay').remove();
			} // Callback for Modal close
		});
	}
}

ModalComponent.register('ModalComponent');

export default ModalComponent;
