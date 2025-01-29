<script lang="ts">
	import { students } from '../../store';
	import { adminStaff } from '../../store';
	import { AdminStaff } from '../../models/adminStaffCLass';
	import { Stundent } from '../../models/StudentClass';
	const student = $students[0];
	const adminStaffNumberTwo = $adminStaff[1];

	function AddStundentToAdminStaff(adminStaff: AdminStaff, student: Stundent) {
		adminStaff.AddStudent(student);
		NotifyStore();
	}

	function MoveStudentToOtherStaff(adminStaff: AdminStaff, student: Stundent) {
		debugger;
		adminStaff.moveStudent(student, adminStaff);
		NotifyStore();
	}

	function NotifyStore() {
		adminStaff.update((currentAdminStaff) => {
			return [...currentAdminStaff];
		});
	}
</script>

<!-- {@debug adminStaff} -->

<h1>AdminStaff</h1>

{#each $adminStaff as adminStaffs}
	<div>
		<p>{adminStaffs.name}</p>
		{#if adminStaffs.students.length > 0}
			<p>{adminStaffs.students[0].name}</p>
		{/if}
		<button on:click={() => AddStundentToAdminStaff(adminStaffs, student)}
			>add stundent to staff</button
		>
		<br />
		<button on:click={() => MoveStudentToOtherStaff(adminStaffNumberTwo, student)}
			>move stundent to other staff</button
		>
	</div>
{/each}
