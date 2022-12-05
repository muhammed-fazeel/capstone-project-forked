using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UpSkillWebApi.Migrations
{
    /// <inheritdoc />
    public partial class addedtablesaftermessingupwithgitrep : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EnrolledCourses_Course_CourseID",
                table: "EnrolledCourses");

            migrationBuilder.DropForeignKey(
                name: "FK_EnrolledCourses_User_UserId",
                table: "EnrolledCourses");

            migrationBuilder.DropForeignKey(
                name: "FK_VideoLinks_Course_CourseId",
                table: "VideoLinks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VideoLinks",
                table: "VideoLinks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EnrolledCourses",
                table: "EnrolledCourses");

            migrationBuilder.RenameTable(
                name: "VideoLinks",
                newName: "VideoLink");

            migrationBuilder.RenameTable(
                name: "EnrolledCourses",
                newName: "EnrolledCourse");

            migrationBuilder.RenameIndex(
                name: "IX_VideoLinks_CourseId",
                table: "VideoLink",
                newName: "IX_VideoLink_CourseId");

            migrationBuilder.RenameIndex(
                name: "IX_EnrolledCourses_UserId",
                table: "EnrolledCourse",
                newName: "IX_EnrolledCourse_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_EnrolledCourses_CourseID",
                table: "EnrolledCourse",
                newName: "IX_EnrolledCourse_CourseID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VideoLink",
                table: "VideoLink",
                column: "VideoLinksId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EnrolledCourse",
                table: "EnrolledCourse",
                column: "EnrolledCoursesId");

            migrationBuilder.AddForeignKey(
                name: "FK_EnrolledCourse_Course_CourseID",
                table: "EnrolledCourse",
                column: "CourseID",
                principalTable: "Course",
                principalColumn: "CourseId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EnrolledCourse_User_UserId",
                table: "EnrolledCourse",
                column: "UserId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VideoLink_Course_CourseId",
                table: "VideoLink",
                column: "CourseId",
                principalTable: "Course",
                principalColumn: "CourseId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EnrolledCourse_Course_CourseID",
                table: "EnrolledCourse");

            migrationBuilder.DropForeignKey(
                name: "FK_EnrolledCourse_User_UserId",
                table: "EnrolledCourse");

            migrationBuilder.DropForeignKey(
                name: "FK_VideoLink_Course_CourseId",
                table: "VideoLink");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VideoLink",
                table: "VideoLink");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EnrolledCourse",
                table: "EnrolledCourse");

            migrationBuilder.RenameTable(
                name: "VideoLink",
                newName: "VideoLinks");

            migrationBuilder.RenameTable(
                name: "EnrolledCourse",
                newName: "EnrolledCourses");

            migrationBuilder.RenameIndex(
                name: "IX_VideoLink_CourseId",
                table: "VideoLinks",
                newName: "IX_VideoLinks_CourseId");

            migrationBuilder.RenameIndex(
                name: "IX_EnrolledCourse_UserId",
                table: "EnrolledCourses",
                newName: "IX_EnrolledCourses_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_EnrolledCourse_CourseID",
                table: "EnrolledCourses",
                newName: "IX_EnrolledCourses_CourseID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VideoLinks",
                table: "VideoLinks",
                column: "VideoLinksId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EnrolledCourses",
                table: "EnrolledCourses",
                column: "EnrolledCoursesId");

            migrationBuilder.AddForeignKey(
                name: "FK_EnrolledCourses_Course_CourseID",
                table: "EnrolledCourses",
                column: "CourseID",
                principalTable: "Course",
                principalColumn: "CourseId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EnrolledCourses_User_UserId",
                table: "EnrolledCourses",
                column: "UserId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VideoLinks_Course_CourseId",
                table: "VideoLinks",
                column: "CourseId",
                principalTable: "Course",
                principalColumn: "CourseId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
